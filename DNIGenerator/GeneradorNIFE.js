
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (GeneradorNIFE == null) var GeneradorNIFE = {};
GeneradorNIFE._path = '/dwr';
GeneradorNIFE.getNIEs = function(p0, callback) {
  dwr.engine._execute(GeneradorNIFE._path, 'GeneradorNIFE', 'getNIEs', p0, callback);
}
GeneradorNIFE.getCIFs = function(p0, callback) {
  dwr.engine._execute(GeneradorNIFE._path, 'GeneradorNIFE', 'getCIFs', p0, callback);
}
GeneradorNIFE.getNIFs = function(p0, callback) {
  dwr.engine._execute(GeneradorNIFE._path, 'GeneradorNIFE', 'getNIFs', p0, callback);
}
GeneradorNIFE.getDocuments = function(p0, p1, p2, callback) {
  dwr.engine._execute(GeneradorNIFE._path, 'GeneradorNIFE', 'getDocuments', p0, p1, p2, callback);
}
GeneradorNIFE.padRight = function(p0, p1, p2, callback) {
  dwr.engine._execute(GeneradorNIFE._path, 'GeneradorNIFE', 'padRight', p0, p1, p2, callback);
}
GeneradorNIFE.padLeft = function(p0, p1, p2, callback) {
  dwr.engine._execute(GeneradorNIFE._path, 'GeneradorNIFE', 'padLeft', p0, p1, p2, callback);
}