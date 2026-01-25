import json
import enchant
import os
import re

dictionary = enchant.Dict("en_US")

outPath = "../../src/assets/spell-variations.json"

if os.path.exists(outPath):
	os.remove(outPath)

def verifyWord(word):
	return dictionary.check(word)

def createWordVariations(spell):
	spell = spell.lower()
	words = spell.split(" ")
	for word in words:
		wordVariations = []
		for i in range(len(word)):
			for charCode in range(97, 123):
				letter = chr(charCode)
				if letter != word[i]:
					newWord = word[:i] + letter + word[i + 1:]
					wordVariations.append(newWord)

	return wordVariations

data = open("../../src/assets/5e-spells.json", "r")
data = json.load(data)

spellNames = [spell["name"] for spell in data]

print("Number found: ", len(spellNames))

for spell in spellNames:
	spell = spell.lower()
	obj = {"name": spell}

	for word in re.split(r'[^\w\']+', spell):
		if word == "of" or word == "the" or word == "and":
			continue
		validWords = []
		variations = createWordVariations(word)
		for variation in variations:
			if verifyWord(variation):
				validWords.append(variation)
		obj[word] = validWords

	if not os.path.exists(outPath):
		with open(outPath, "w") as outFile:
			json.dump([], outFile)

	with open(outPath, "r+") as outFile:
		try:
			existingData = json.load(outFile)
			if not isinstance(existingData, list):
				existingData = []
		except json.JSONDecodeError:
			existingData = []
		existingData.append(obj)
		outFile.seek(0)
		json.dump(existingData, outFile, indent="\t")

