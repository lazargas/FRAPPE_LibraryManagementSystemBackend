import Member from '../models/Member.js';

const memberController = {};

// Create a new member
memberController.createMember = async (req, res) => {
    try {
        const member = new Member(req.body);
        await member.save();
        res.status(201).send(member);
    } catch (error) {
        res.status(500).send("Error creating member: " + error.message);
    }
};

// Retrieve all members
memberController.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find({});
        res.send(members);
    } catch (error) {
        res.status(500).send("Error fetching members: " + error.message);
    }
};

// Retrieve a single member by ID
memberController.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) {
            res.status(404).send("Member not found");
            return;
        }
        res.send(member);
    } catch (error) {
        res.status(500).send("Error fetching member: " + error.message);
    }
};

// Update a member by ID
memberController.updateMember = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const member = await Member.find({"email":req.params.id});

        if (!member) {
            res.status(404).send("Member not found");
            return;
        }

        updates.forEach(update => member[0][update] = req.body[update]);
        await member[0].save();

        res.send(member[0]);
    } catch (error) {
        res.status(500).send("Error updating member: " + error.message);
    }
};

// Delete a member by ID
memberController.deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);

        if (!member) {
            res.status(404).send("Member not found");
            return;
        }
        res.send(member);
    } catch (error) {
        res.status(500).send("Error deleting member: " + error.message);
    }
};

export default memberController;
