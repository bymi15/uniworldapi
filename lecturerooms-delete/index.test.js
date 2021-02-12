const mongoose = require('mongoose');
const httpFunction = require('./index');
const context = require('../testing/defaultContext');
const { loadDatabase } = require('../utils/database');
const Lectureroom = require('../models/lectureroom');
const { injectedMockLectureRoomData } = require('../testing/mockData');

describe('lecturerooms-delete', () => {
  let injectedLectureRoomId = null;
  // Load MongoDB Memory Database
  beforeAll(async () => {
    await loadDatabase();
    await Lectureroom.deleteMany();
  });

  // Inject mock lecture room data
  beforeEach(async () => {
    const lectureRoom = await new Lectureroom(
      injectedMockLectureRoomData
    ).save();
    injectedLectureRoomId = lectureRoom._id;
  });

  // Clear DB after each test
  afterEach(async () => {
    await Lectureroom.deleteMany();
    injectedLectureRoomId = null;
  });

  // Close MongoDB connection
  afterAll(() => {
    mongoose.connection.close();
  });

  it('lecturerooms-delete should delete an lecture room by id', async () => {
    const request = {
      params: {
        id: injectedLectureRoomId.toString(),
      },
    };
    await httpFunction(context, request);

    expect(context.res.status).toBe(204);

    const lectureRoom = await Lectureroom.findById(
      injectedLectureRoomId.toString()
    );
    expect(lectureRoom).toBe(null);
  });

  it('lecturerooms-delete should return a 500 response code if the id is invalid', async () => {
    const request = {
      params: {
        id: 'invalidId',
      },
    };
    await httpFunction(context, request);

    expect(context.res.status).toBe(500);
    expect(context.res.body).toBeDefined();
    expect(context.res.body.message).toBeDefined();
  });
});
