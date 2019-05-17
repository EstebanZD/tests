var host_regexps = [
/.*\.i2p/
];

function FindProxyForURL(url, host) { 

url = url.toLowerCase();
host = host.toLowerCase(); 

if ((url.substr(0,7) != "http://") && (url.substr(0,8) != "https://")) {
    return DIRECT;	
  }

for (var i=0; i<host_regexps.length; i++) { 
   if (host_regexps[i].test(host)) { 
      return PROXY 127.0.0.1:4444; } 
   } 
   
return DIRECT; 

}
