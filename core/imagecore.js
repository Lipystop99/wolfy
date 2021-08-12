var  fs=  require('fs');
module.exports={
	//Read the file
	 readfileSync: function(path){ //Read synchronously
		 //Read path
        var  data  =  fs.readFileSync(path,'utf-8');
        console.log(data);
                 console.log("Synchronization method completed");                
    },
         readfile:function(path,recall){ //Asynchronous execution
        fs.readFile(path,  function  (err,  data)  {
			 //If the error is err
            if  (err)  {
              console.log(err);
            }else{
              console.log(data.toString());
			  recall(data);
            }
        });
                 console.log("Asynchronous method execution finished");
    },
	
	//Read binary image (incoming path)
	readImg:function(path,res){
                 fs.readFile(path,'binary',function(err,filedata) {//Asynchronously execute the'binary' binary stream file
            if  (err)  {
                console.log(err);
                return;
            }else{
		res.write(filedata,'binary');
		res.end();
            }
        });
    },
	
	 //Write file
         writefile:function(path,data,recall){ //Asynchronous mode
        fs.writeFile(path,  data,  function  (err)  {
            if  (err)  {
                throw  err;
            }
                         console.log('It\'s saved!'); //The file is saved
			 recall('Successful writing file!');
          });
    },
         writeFileSync:function(path,data){ //Sync mode
        fs.writeFileSync(path,  data);
                 console.log("Complete writing files synchronously");
    },	
}