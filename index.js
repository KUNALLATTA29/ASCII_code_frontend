document.getElementById("btn").addEventListener('click',() => {

  let c = String(document.getElementById("text").value);
  let code = c.charCodeAt(0);
    
  document.getElementById("result").innerText = `ASCII CODE: ${code}`;
 
})