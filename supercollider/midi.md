# SuperCollider MIDI

https://tidalcycles.org/index.php/SuperDirt_MIDI_Tutorial

## Show MIDI devices
```MIDIClient.init;```

### Example output
```
MIDI Sources:
	MIDIEndPoint("Blofeld", "")
MIDI Destinations:
	MIDIEndPoint("Blofeld", "")
	MIDIEndPoint("SimpleSynth virtual input", "SimpleSynth virtual input")
```

## Create MIDI instrument
```
~midiOut = MIDIOut.newByName("SimpleSynth virtual input", "SimpleSynth virtual input");
~dirt.soundLibrary.addMIDI(\midi, ~midiOut);
```
