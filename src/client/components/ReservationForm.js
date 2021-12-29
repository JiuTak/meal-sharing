import React, { useState } from "react";

function ReservationForm({ meal_id }) {
  const [addReservation, setAddReservation] = useState({
    meal_id: meal_id,
    number_of_guests: "",
    created_date: new Date().toISOString(),
    contact_name: "",
    contact_email: "",
    contact_phonenumber: "",
  });

  const addMealReservation = async () => {
    setAddReservation({ submitting: false });

    const response = await fetch("./api/reservations", {
      method: "POST",
      body: JSON.stringify(addReservation),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    setAddReservation({ submitting: true });

    if (response.status === 200) {
      alert("Reservation have made");
    } else {
      alert("Unexpected error occurred ");
      console.error(
        "Unexpected error occurred from api/reservations",
        response.status
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addMealReservation(addReservation)
      .then(
        setAddReservation({
          number_of_guests: "",
          contact_name: "",
          contact_email: "",
          contact_phonenumber: "",
        })
      )
      .catch((e) => {
        alert(`Unexpected error: ${e}`);
        console.error(e);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <lable>
            <span>Name</span>
            <input
              type="text"
              value={addReservation.contact_name}
              required
              onChange={(e) =>
                setAddReservation({
                  ...addReservation,
                  contact_name: e.target.value,
                })
              }
            />
          </lable>
          <lable>
            <span>Phone number</span>
            <input
              type="text"
              value={addReservation.contact_phonenumber}
              required
              onChange={(e) =>
                setAddReservation({
                  ...addReservation,
                  contact_phonenumber: e.target.value,
                })
              }
            />
          </lable>
          <lable>
            <span>Email</span>
            <input
              type="text"
              value={addReservation.contact_email}
              required
              onChange={(e) =>
                setAddReservation({
                  ...addReservation,
                  contact_email: e.target.value,
                })
              }
            />
          </lable>
          <lable>
            <span>Number of guests</span>
            <input
              type="text"
              value={addReservation.number_of_guests}
              required
              onChange={(e) =>
                setAddReservation({
                  ...addReservation,
                  number_of_guests: e.target.value,
                })
              }
            />
          </lable>
        </div>
        <button>
          {addMealReservation.submitting ? "New Booking" : "Book"}
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
