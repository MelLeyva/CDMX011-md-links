const getRoute = require("../Lib/type-route.js");
const fileOrDir = require('../Lib/md-files.js');
const getLinks = require('../Lib/links.js');
const {files, links} = require ('./mosks.js');
//const mdLinks = require('../');

const relativePath = './mocksito'
const  absolutePath='C:\\Users\\Laboratoria\\Desktop\\LABORATORIA\\CDMX011-md-links\\mocksito'
// meter otro path y ejecutar getFiles


describe('Check if the path is absolute', () => {

  it('should be a funtion', () => {
    expect(typeof getRoute.typeRoute).toBe('function');
  });
  it('should return an absolute path when recive a relative one', () =>{
     expect(getRoute.typeRoute(relativePath)).toEqual(absolutePath)
    //console.log('esta es relativa' + relativePath)
    //console.log('esta es absoluta' + absolutePath)
  })

});

describe('Check if the path is a file or a directory', () => {

  it('should be a funtion', () => {
    expect(typeof fileOrDir.getFiles).toBe('function');
  });
  it('should return all the files in the directory', () =>{
    //console.log(files)
    expect(fileOrDir.getFiles(absolutePath)).toStrictEqual(files)
  })
 /*  it('should return all the files in the directory2', () =>{
    //console.log(files)
    expect(fileOrDir.getFiles(absolutePath)).toStrictEqual(files)
  }) */
});

describe('get de links inside the md files', () => {

  it('should be a funtion', () => {
    expect(typeof getLinks.getLinks).toBe('function');
  });
  it('should return an array with every object of the links found with its href, text, file', () =>{
    //console.log(files)
    expect(getLinks.getLinks(files)).toEqual(links)
  })
});

