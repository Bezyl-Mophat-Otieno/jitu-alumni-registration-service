const DB = require('../../../database/dbHelpers')
const {registerMember} = require('../../../controllers/memberController/memberRegisterController')

jest.mock('../../../database/dbHelpers')
describe('Creating a user ', () => {
    it('should return an error when any of the fields is empty', async () => {
        const mockedReq = {
            body:{}
        }
        const mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        await   registerMember(mockedReq, mockedRes)
        expect(mockedRes.status).toHaveBeenCalledWith(400)
        expect(mockedRes.json).toHaveBeenCalledWith({message: "Please fill all fields"})


    })
    it('should return an a success when the email is valid',async () =>{
        const mockedReq = {
            body:{
                fname: 'John',
                lname: 'Doe',
                email: 'john.doe@thejitu.com',
                cohortTitle:'QA/QE',
                cohortNumber: 17

            }
        }

        const mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
          await  registerMember(mockedReq, mockedRes)
        expect(mockedRes.status).toHaveBeenCalledWith(400)
    })

    it('should return an error when any of the fields is empty', async () => {
        const mockedReq = {
            body:{}
        }
        const mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        await   registerMember(mockedReq, mockedRes)
        expect(mockedRes.status).toHaveBeenCalledWith(400)
        expect(mockedRes.json).toHaveBeenCalledWith({message: "Please fill all fields"})


    })
    it('should return an error  when the email is invalid',async () =>{
        const mockedReq = {
            body:{
                fname: 'John',
                lname: 'Doe',
                email: 'dnefbud.doe@thejitu.com',
                cohortTitle:'QA/QE',
                cohortNumber: 17

            }
        }

        const mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
          await  registerMember(mockedReq, mockedRes)
        expect(mockedRes.status).toHaveBeenCalledWith(400)
    })




    it('should return an error when the user is not registered', async () => {

        const mockedReq = {
            body:{
                fname: 'John',
                lname: 'Doe',
                email: 'john.doe@thejitu.com',
                cohortTitle:'QA/QE',
                cohortNumber: 17

            }
        }

        const mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
          await   DB.executeProcedure.mockResolvedValue({rowsAffected: [0]})
          const result = await DB.executeProcedure()
          await  registerMember(mockedReq, mockedRes)
        expect(mockedRes.status).toHaveBeenCalledWith(400)
        expect(mockedRes.json).toHaveBeenCalledWith({message: "Member not registered"})


    })

    it('should return an a success when the user registered successfully', async () => {

        const mockedReq = {
            body:{
                fname: 'John',
                lname: 'Doe',
                email: 'john.doe@thejitu.com',
                cohortTitle:'QA/QE',
                cohortNumber: 17

            }
        }

        const mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
          await   DB.executeProcedure.mockResolvedValue({rowsAffected: [1]})
          const result = await DB.executeProcedure()
            await  registerMember(mockedReq, mockedRes)
        expect(mockedRes.status).toHaveBeenCalledWith(201)
        expect(mockedRes.json).toHaveBeenCalledWith({message: "Member registered successfully"})


    })
  
    
});

