function getData() 
{
    console.log('Executing getData');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/Servlet/getData');

	xhr.onload=()=>{
	        console.log('on load triggered');
	        if(xhr.readyState===4){

	            if(xhr.status==200){
					document.getElementById('successArea').innerHTML= xhr.responseText;
	                
	            }
	            else{

	                console.log("error occured")
	            }
	        }
	       }
	       xhr.send(); 

	       console.log(xhr);
}

function addData() 
{
	console.log('Executing getData');

	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', 'http://localhost:8080/Servlet/addData');

		xhr.onload=()=>{
		        console.log('on load triggered');
		        if(xhr.readyState===4){

		            if(xhr.status==200){
						document.getElementById('successArea').innerHTML= xhr.responseText;
		                
		            }
		            else{

		                console.log("error occured")
		            }
		        }
		       }
		       xhr.send(); 

		       console.log(xhr);
}

function clearData() 
{
	console.log('Executing getData');

		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', 'http://localhost:8080/Servlet/clearData');

			xhr.onload=()=>{
			        console.log('on load triggered');
			        if(xhr.readyState===4){

			            if(xhr.status==200){
							document.getElementById('successArea').innerHTML= xhr.responseText;
			                
			            }
			            else{

			                console.log("error occured")
			            }
			        }
			       }
			       xhr.send(); 

			       console.log(xhr);
}

function removeData() 
{
	console.log('Executing getData');

		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', 'http://localhost:8080/Servlet/removeData');

			xhr.onload=()=>{
			        console.log('on load triggered');
			        if(xhr.readyState===4){

			            if(xhr.status==200){
							document.getElementById('successArea').innerHTML= xhr.responseText;
			                
			            }
			            else{

			                console.log("error occured")
			            }
			        }
			       }
			       xhr.send(); 

			       console.log(xhr);
}