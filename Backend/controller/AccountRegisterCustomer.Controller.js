import AccountRegisterCustomer from "../models/AccountRegistercustomer.models.js";

export const AccountCreatcustomer = async (req, res) => {
    const { fullname, email, phoneno, address } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await AccountRegisterCustomer.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ error: "This user already exists in our database." });
        }

        // Create a new account
        const newAccount = new AccountRegisterCustomer({
            fullname,
            email,
            phoneno,
            address,
        });

        // Save the new account
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount); // 201 Created
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};


// All Acccount View 
export const AccountCreatcustomerIndex = async (req, res) => {
    try {
        const AccountCreatcustomerRegister = await AccountRegisterCustomer.find();
        res.json(AccountCreatcustomerRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
