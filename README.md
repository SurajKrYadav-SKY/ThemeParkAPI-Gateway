# FRONTEND - MIDDLE_END - BACKEND

- This MIDDLE_END is actually the api-gateway

- We need an intermediate layer between the client side and the microservices.
- Using the middle end, when the client sends request, we will be able to make decision that which microservice should actually respond to this request
- Here we can do message validation, response transformation, rate limiting, etc
- We try to prepare an API Gateway that acts as this middle end.

# What does rate-limiting do?

- If someone is trying to bombard a lot of request to our backend services, then I cannot implement same logic again and again in every service that if a perticular IP is sending a lot of request, just block the IP for for few minutes or according to the requirement.

- Microservice's only task is to work on the logic that it is intended to do.

- Appart from that if we want to communicate with the microservices and we want to authenticate the request, then we have to handle the authentication logic in the microservices only.

- But using middle end i.e Api gateway, we can connect to the authentication logic/service saperately, get the response and using this response, we can call the microservices.

# It will also act as a reverse proxy

- A reverse proxy is a server that acts as an intermediary between a user's browser and a web server. It intercepts and forwards requests from the user to the web server.

# How does it work?

- A reverse proxy is placed at the edge of a network.
- It receives requests from a user's browser.
- It inspects the requests.
- It forwards the requests to the web server.
- It returns the response from the web server to the user.

# Why is it used?

- To improve security and performance
- To provide a public access point and DNS
- To balance traffic distribution
- To protect web servers from attacks
- To handle multiple requests for the same site

# Loging mechanism will also be implemented here which will log all the incomming request.
