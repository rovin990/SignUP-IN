# SignUP-IN
An API which can sign up user and sign In users based on data provided by user

for SignUP 
API END Point: http://localhost:3000/signUp : POST
              body Data: {
                            "name": "cook food",
                            "email": "rovin@gmail.com",
                            "password": "1234567"   //should be greater than 5 charactor
                        }

                Response : 
                      {
                        "name": "cook food",
                        "email": "rovin@gmail.com",
                        "id": "64fbebe3e5f1aae17076e4bb"
                    }


for SignIn
API END Point: http://localhost:3000/signIn : POST
              body Data: {
                            
                            "email": "rovin@gmail.com",
                            "password": "1234567"  
                        }

                Response : 
                       {
                          "msg": "LoggedIn successfully !",
                          "token": "8a6d5205-bedf-443c-b3f9-24fbe0e265f1"
                      }
                    


                
