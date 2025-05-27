import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "/conference_event_planner/projector.png",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "/conference_event_planner/speakers.png",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "/conference_event_planner/microphone.png",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "/conference_event_planner/whiteboard.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "/conference_event_planner/signs.png",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
