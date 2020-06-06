exports.createClient = async(req, res) => {
    try { 
      const newClient = await Client.create(req.body);
  
      res.status(201).json({
          success: true,
          data: {
              client: newClient
          }
      });
  } catch(err) {
      res.status(500).json({
          success: false,
          error: err.name
      });
  }
}