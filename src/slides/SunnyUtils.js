const SunnyUtils = {
	getPath: function(path) {
		if(window.sunnyUtils) {
			return window.sunnyUtils.getPath(path);
			/*This lets us get build info from the main Taiyou website*/
		}
		else {
			return path;
		}
	}
}
export default SunnyUtils;
