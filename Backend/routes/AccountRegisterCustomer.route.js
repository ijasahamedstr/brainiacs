// Import required modules
import express from "express";
import { AccountCreatcustomer, AccountCreatcustomerIndex } from "../controller/AccountRegisterCustomer.Controller.js";


const Accountrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Accountrouter.post('/',AccountCreatcustomer);

// View the Data Register
Accountrouter.get('/',AccountCreatcustomerIndex);



export default Accountrouter;