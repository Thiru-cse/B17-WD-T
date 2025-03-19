import Service from "../models/Service.js"

// Create a new Service (Admin Only)
export const createService = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const service = await Service.create({ name, description, price });
        await service.save();

        res.status(200).json({message: "Service created successfully", data: service});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get All Services
export const getService = async (req, res) => { 
    try {
        const services = await Service.find();
        res.status(200).json({message: "Services retrieved successfully", data: services});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Update a service (Admin Only)
export const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const { name, description, price } = req.body;
        const result = await Service.findByIdAndUpdate(
            serviceId,
            { name, description, price },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.status(200).json({message: 'Service Updated', data: result});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Delete a service (Admin Only)
export const deleteService = async (req, res) => { 
    try {
        const serviceId = req.params.id;
        const result = await Service.findByIdAndDelete(serviceId);

        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({message: 'Service deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}