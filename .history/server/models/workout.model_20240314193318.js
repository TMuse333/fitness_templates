const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    sets: [{
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      }
    }]
  }]
});

const Workout = mongoose.model('Workout', workoutSchema);


