const mongoose = require("mongoose")

const presmod = mongoose.Schema({
    docname : {
        type:String,
        required : true
    },
    docId : {
        type:String,
        required:true
    },
    patientname: {
        type:String,
        required : true
    },
    patientId:{
        type:String,
        required: true
    },
    date : {
        type: String,
        required : true
    },
    drugs:{
        drug1:{
            name:{
                type:String,
            },
            dose:{
                type: String
            },
            totalquantity : {
                type: String
            },
            sched: {
                morn : {
                    
                    quantity : {
                        type:String
                    }
                },
                lunch : {
                    
                    quantity : {
                        type: String
                    }
                },
                evening : {
                    
                    quantity:{
                        type:String
                    }
                },
                Dinner:{
                    
                    quantity:{
                        type:String
                    }
                }
            }
        },
        drug2:{
            name:{
                type:String,
                default : "nill"
            },
            dose:{
                type: String,
                default : "nill"
            },
            totalquantity : {
                type: String,
                default : "nill"
            },
            sched: {
                
                morn : {
                    
                    
                    quantity : {
                        type:String
                    }
                },
                lunch : {
                    
                    
                    quantity : {
                        type: String
                    }
                },
                evening : {
                    
                    
                    quantity:{
                        type:String
                    }
                },
                Dinner:{
                    
                    
                    quantity:{
                        type:String
                    }
                }
            }
        },drug3:{
            name:{
                type:String,
                default : "nill"
            },
            dose:{
                type: String,
                default : "nill"
            },
            totalquantity : {
                type: String,
                default : "nill"
            },
            sched: {
                
                morn : {
                    
                    
                    quantity : {
                        type:String
                    }
                },
                lunch : {
                    
                    
                    quantity : {
                        type: String
                    }
                },
                evening:{
                    
                    quantity:{
                        type:String
                    }
                },
                Dinner:{
                    
                    
                    quantity:{
                        type:String
                    }
                }
            }
        },drug4:{
            name:{
                type:String,
                default : "nill"
            },
            dose:{
                type: String,
                default : "nill"
            },
            totalquantity : {
                type: String,
                default : "nill"
            },
            sched: {
                
                morn : {
            
                    
                    quantity : {
                        type:String
                    }
                },
                lunch : {
                    
                    
                    quantity : {
                        type: String
                    }
                },
                evening : {
                
                    
                    quantity:{
                        type:String
                    }
                },
                Dinner:{
                
                    
                    quantity:{
                        type:String
                    }
                }
            }
        },drug5:{
            name:{
                type:String,
                default : "nill"
            },
            dose:{
                type: String,
                default : "nill"
            },
            totalquantity : {
                type: String,
                default : "nill"
            },
            sched: {
                morn : {
                    quantity : {
                        type:String
                    }
                },
                lunch : {
                    
                    
                    quantity : {
                        type: String
                    }
                },
                evening : {
                
                    
                    quantity:{
                        type:String
                    }
                },
                Dinner:{
                
                    
                    quantity:{
                        type:String
                    }
                }
            }
        },drug6:{
            name:{
                type:String,
                default : "nill"
            },
            dose:{
                type: String,
                default : "nill"
            },
            totalquantity : {
                type: String,
                default : "nill"
            },
            sched: {
                morn : {                  
                    quantity : {
                        type:String
                    }
                },
                lunch : {
                    quantity : {
                        type: String
                    }
                },
                evening : {
                    quantity:{
                        type:String
                    }
                },
                Dinner:{
                    quantity:{
                        type:String
                    }
                }
            }
        },

    }
})

module.exports = mongoose.model('presdata',presmod)