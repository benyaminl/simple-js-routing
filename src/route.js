/**
 * @param {MouseEvent} e 
 */
function gotoUrl(e){
    var el = e.target;
    title = el.attributes.getNamedItem("title").value ?? document.title;
    document.title = title;
    data = {
      loc : el.attributes.getNamedItem("route").value,
      title: title,
    };
    url = data.loc;
    history.pushState(data, title, url);
}

/**
 * @param {PopStateEvent} e
 */
function backState(e) {
  var loc = e.state.loc;
  var target = document.querySelector("*[route='"+loc+"']");
  document.title = e.state.title;
  target.removeEventListener("click", gotoUrl);
  target.click();
  target.addEventListener("click", gotoUrl);
  console.log(target);
}

window.addEventListener("popstate",backState);

document.querySelectorAll("*[route]").forEach(el => {
  el.addEventListener("click", gotoUrl);
});


