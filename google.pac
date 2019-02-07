var host_regexps = [
/google\.com/,
/google\.cl/
]

function FindProxyForURL(url, host) { 

url = url.toLowerCase();
host = host.toLowerCase(); 

if ((url.substr(0,7) != "http://") && (url.substr(0,8) != "https://")) {
    return "DIRECT" ;	
  }

if (isPlainHostName(host)) return "DIRECT"; 

for (var i=0; i<host_regexps.length; i++) { 
   if (host_regexps[i].test(host)) { 
      return "PROXY 205.201.204.33:46220"; }
   } 
  
return "DIRECT"; 

}
