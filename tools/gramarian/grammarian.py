import json
import enchant
import os
import re

dict = enchant.Dict("en_US")

outPath = "../../src/assets/spell-variations.json"

if os.path.exists(outPath):
	os.remove(outPath)

def verify_word(word):
	return dict.check(word)

def create_word_variations(spell):
	spell = spell.lower()
	words = spell.split(" ")
	for word in words:
		word_variations = []
		for i in range(len(word)):
			for char_code in range(97, 123):
				letter = chr(char_code)
				if letter != word[i]:
					new_word = word[:i] + letter + word[i+1:]
					word_variations.append(new_word)

	return word_variations

data = open("../../src/assets/5e-spells.json", "r")
data = json.load(data)

spell_names = [spell["name"] for spell in data]

print("Number found: ", len(spell_names))

for spell in spell_names:
	spell = spell.lower()
	obj = {"name": spell}

	for word in re.split(r'[^\w\']+', spell):
		valid_words = []
		variations = create_word_variations(word)
		for variation in variations:
			if verify_word(variation):
				valid_words.append(variation)
		obj[word] = valid_words

	if not os.path.exists(outPath):
		with open(outPath, "w") as outfile:
			json.dump([], outfile)

	with open(outPath, "r+") as outfile:
		try:
			existing_data = json.load(outfile)
			if not isinstance(existing_data, list):
				existing_data = []
		except json.JSONDecodeError:
			existing_data = []
		existing_data.append(obj)
		outfile.seek(0)
		json.dump(existing_data, outfile, indent="\t")

