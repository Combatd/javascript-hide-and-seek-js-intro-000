/*Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.*/
function getFirstSelector(selector) {
  let firstEle = document.querySelector(selector);
  return firstEle;
}

/*Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)*/
function nestedTarget() {
 let nested = document.querySelector('#nested');
 nested.querySelector('.target');
}

/*Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()*/
function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-lists');
  let liNumber = rankedLists.querySelectorAll('li');
  liNumber += n;
}

/*Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)*/
function deepestChild() {
  let grandNode = document.getElementById('grand-node');
  let masterDiv = grandNode.querySelector('div');
  for (var i = 0; i < masterDiv.length; i++) { // iterate through
  if (masterDiv[i].textContent == "boo!åå") { // check for boo!
    found = aTags[i];
    break;
  }
}
}
