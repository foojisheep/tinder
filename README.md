## Goal

1. Create a JS function with SQL query to mimic the recommendation function of Tinder.
    a. A user profile consists of {name, gender, location, university, interests} 
    b. User will get 10 new recommendations on daily basis
    c. Include randomization of the profiles and any other sensible logics 
    d. Apply some weightages.
2. Create frontend using React+Typescript to demonstrate the swiping feature in Q1. 
3. You are required to apply advanced techniques in terms of security & performance for Q1 & Q2.
4. Use UML diagrams to describe your Data structure and logics
5. The primary function of VirtualProtocol is to allow contributors to upload 3d models for characters of chosen anime. Once an anime title receives the first model, it will spin a new docker container to serve the 3d models. The container consists of a web service with:
    a. 1 endpoint to list all the available models, and a path to access the model. Eg:
        i. [{name:”naruto”, model: “/models/naruto.obj”}, {name:”sasuke”,model:”/models/sasuke.obj”}]
    b. 1 endpoint to serve the content. 
    c. The endpoints should use JWT authentication. Your solution should allow horizontal scaling of the containers. eg: 3 containers serving OnePiece, 2 containers serving Pokemon
