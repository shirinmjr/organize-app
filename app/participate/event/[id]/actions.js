"use server";
import event from "../../../../assets/mock/mockEvent.json";
import organizer from "../../../../assets/mock/mockOrganizer.json";

export async function getEvent(id) {
  //@TODO return the event with the correct id
  return event;
}

export async function getOrganizer(id) {
  return organizer;
}
