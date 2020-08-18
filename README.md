# Image resizer
- Package that replace all images any `img` tag with the same image with specified width
- If no height is specified, height is calculated based on width/height ratio of the original image
- New image is placed in an `a` tag with reference (`href`) to original size image
- If user doesn't want to convert all images, helper class (selectorClass) can be specified to narrow list of images that will be used

## Installation
### npm
#### Install
`npm i all-images-resizer-tool --save`
#### Usage
```
import { resizeImage } from 'all-images-resizer-tool';
resizeImage({
    width: 400
});
```
<!-- ### cdn -->


## Parameteres
|    Parameter   | Type     | Mandatory  |    Default   |                               Options                               |
|:--------------:|:--------:|:----------:|:------------:|:-------------------------------------------------------------------:|
|      width     | _int_    |     ✅     |              |                             Any integer                            |
|     height     | _int_    |     ❌     |       0      |                             Any integer                             |
|   outputType   | _string_ |     ❌     |      png     |                              png, jpeg                              |
| encoderQuality | _double_ |     ❌     |     0.92     | 0.0 - 1.0 full quality - 1.0 medium quality - 0.5 low quality - 0.1 |
|  selectorClass | _string_ |     ❌     | empty string |                            Any class name                           |


## Usage

## Links
- *GitHub* [link](https://github.com/bunatl/image-resizer/issues)
- *npm* [link](https://www.npmjs.com/package/all-images-resizer-tool)

## To do
- Find out a way to resize images before loading => save data transfer

## Contributions
All suggections and ideas are welcome!

## Licence
MIT