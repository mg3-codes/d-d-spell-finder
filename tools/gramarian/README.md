# Grammarian Tool Setup Instructions

Follow these steps to set up the environment for running the `gramarian.py` file:

1. **Install Enchant**  
	Use Homebrew to install Enchant:  
	```bash
	brew install enchant
	```

2. **Install PyEnchant**  
	Install the Python library `pyenchant` using pip:  
	```bash
	pip3 install pyenchant
	```

3. **Set the Enchant Library Path**  
	Export the library path for Enchant:  
	```bash
	export PYENCHANT_LIBRARY_PATH=/opt/homebrew/lib/libenchant-2.dylib
	```

Once these steps are completed, you should be ready to run the `gramarian.py` script.
