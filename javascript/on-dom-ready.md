https://www.sitepoint.com/jquery-document-ready-plain-javascript/?utm_source=javascriptweekly&utm_medium=email
```
var callback = function(){
  // Handler when the DOM is fully loaded
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
```
