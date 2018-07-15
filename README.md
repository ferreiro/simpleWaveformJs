# simpleWaveFormJS

Easy wrapper for [audiowaveform](https://github.com/bbc/audiowaveform)

Output normalized waveform data (between 0 and 1)

## Install

```npm install --save https://github.com/Guisch/simpleWaveformJs.git```

## Example

```
var wf = require('simplewaveformjs');

wf.getWaveform('input.mp3', function(res) {
  console.log(res);
});
```

### Output

```[0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.4881889763779528, 0.5118110236220472, 0.484251968503937, 0.515748031496063, 0.484251968503937, 0.5118110236220472, 0.484251968503937, 0.515748031496063, 0.4881889763779528, 0.5118110236220472, 0.49606299212598426, 0.5039370078740157, 0.4881889763779528, 0.5118110236220472, 0.4881889763779528, 0.5118110236220472, 0.4881889763779528, 0.5118110236220472, 0.484251968503937, 0.515748031496063, 0.4881889763779528, 0.5118110236220472, 0.49606299212598426, 0.5039370078740157, 0.4881889763779528, 0.515748031496063, 0.4881889763779528, 0.5118110236220472, 0.484251968503937, 0.515748031496063, 0.484251968503937, 0.5196850393700787, 0.4921259842519685, 0.5118110236220472, 0.49606299212598426, 0.5039370078740157, 0.4881889763779528, 0.5118110236220472, 0.484251968503937, 0.5118110236220472, 0.48031496062992124, 0.5196850393700787, 0.48031496062992124, 0.5196850393700787, 0.4881889763779528, 0.5118110236220472, 0.49606299212598426, 0.5078740157480315, 0.4881889763779528, 0.5078740157480315, 0.4881889763779528, 0.5118110236220472, 0.484251968503937, 0.515748031496063, 0.48031496062992124, 0.5196850393700787, 0.4921259842519685, 0.5118110236220472, 0.4921259842519685, 0.5078740157480315, 0.4921259842519685, 0.5078740157480315, 0.4921259842519685, 0.5078740157480315, 0.484251968503937, 0.5196850393700787, 0.4763779527559055, 0.5236220472440944, 0.4921259842519685, 0.5078740157480315, 0.4921259842519685, 0.5078740157480315, 0.4881889763779528, 0.5118110236220472, 0.4921259842519685, 0.5078740157480315, 0.4763779527559055, 0.5236220472440944, 0.48031496062992124, 0.5196850393700787, 0.4921259842519685, 0.5118110236220472, 0.4921259842519685, 0.5078740157480315, 0.4881889763779528, 0.5118110236220472, …]```
