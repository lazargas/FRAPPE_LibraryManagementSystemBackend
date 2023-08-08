import Book from "../models/Book.js";
import axios from 'axios';


export const importBooks = async (req, res) => {
    const API_URL = "https://frappe.io/api/method/frappe-library?page=2&title=and";
    const params = {
      page: 2,
      title: "and"
    };
  
    try {
      const response = await axios.get(API_URL, { params });
      console.log(response.data.message);
      const booksData = response.data.message;
  
      // Insert all the fetched books into MongoDB
      booksData.forEach(book => {
        try{
            book.stock=10;
            book.price=Math.round(2500 - Math.random()*1000);
            const oneBook = new Book(book);
            oneBook.save();
         }catch(error){
             res.status(410).send("Error while saving");
         } 
      });
  
      res.send("Books imported successfully!");
    } catch (error) {
      res.status(500).send("Error fetching data from Frappe API");
    }
}