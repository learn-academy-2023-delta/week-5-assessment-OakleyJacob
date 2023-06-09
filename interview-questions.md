# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: It calls(invokes) the parent classes initilize method for the object.

Researched answer: So it actually calls the parent classes associated method for whatever method the super call is in. So while the super call is typically in the initialize method, and this is where I've seen it. You can definitely call super in other methods of the class. 

2. What is a gem?

Your answer: A gem is a package of code snippets that someone grouped together for your convenience.

Researched answer: Gem's have largely varied functions, Rspec and Rails are actually gems. Gem's, like ruby, are also open sourced.

3. What is a relational database? Are there other kinds of databases?

Your answer:  A relational database is a database where tables are linked via columns called keys. There definitely are other kinds of databases, namely non-relational databases that work off of a form/document model as opposed to the table and link model of SQL based databases.

Researched answer: There are many other types of databases, including hierarchical and object oriented databases. Hierarchical use a parent-child model and boast very high performance, due to quick access time of cells. Object oriented databases store data in.... you guessed it.. object form! Just like objects in ruby or javascript an OOD can house classes, attributes, methods and other OOP conceptual items in their data cells.

4. What are primary keys? Why purpose does a primary key serve?

Your answer:A primary key is a unique value associated with an element in a table. It is used to quickly 'identify' the table element across the rest of the database. It saves the DB on processing power and data storage because it allows the exchange of minimal information to query or maintain relationships.

Researched answer: While the most common types of PKs are auto-incremented integers or UUIDs, tables can also use composite keys formed by combining multiple columns that form a unique identifier.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: 
GET-READ
POST-CREATE
PUT-UPDATE
PATCH-UPDATE
DELETE-UMM IDK THIS ONE


Researched answer: Put and Patch are indeed very similar, but put is used to replace the entire element. Whereas patch is used to update a select portion of the data.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Model validations allow you to define rules and constraints for the data that is being saved to the database. These rules help validate the correctness and completeness of the data before it is persisted. It sounds like Rspec/Jest for databases.

2. RESTful routes: The seven restful routes are Index(get), New(get), Create(post), Show(get), Edit(get), Update(put), Destroy(delete)
What they do is honestly in the name of each route, but I can't help but notice there isnt a standard patch route.

3. ERB:ERB stands for Embedded Ruby. It is a templating language for building html templates/pages in a rails application.

4. Params: Params is an object in ruby that allows us to interact with http requests. For instance it allows us to pull attribute values from the URI associated with the request.

5. API: Application Programming Interface, it is kind of like a computer program for other computer programs. Where a normal program is designed to interact with an end user. An api sets up the request/response cycle that the computer programs will use to exchange data.
