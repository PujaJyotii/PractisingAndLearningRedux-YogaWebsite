import { Button, Table } from "react-bootstrap";
import classes from "./Bookings.module.css";

const schedule = [
  { instructor: "John Doe", timeSlot: "9:00 AM - 10:00 AM" },
  { instructor: "Jane Smith", timeSlot: "10:00 AM - 11:00 AM" },
  { instructor: "Emily Johnson", timeSlot: "11:00 AM - 12:00 PM" },
  { instructor: "Michael Brown", timeSlot: "12:00 PM - 1:00 PM" },
  { instructor: "Sarah Davis", timeSlot: "1:00 PM - 2:00 PM" },
  { instructor: "David Wilson", timeSlot: "2:00 PM - 3:00 PM" },
  { instructor: "Laura Moore", timeSlot: "3:00 PM - 4:00 PM" },
  { instructor: "Robert Taylor", timeSlot: "4:00 PM - 5:00 PM" },
];
function Bookings() {
  return (
    <Table variant="dark" className={classes.container}>
      <thead>
        <tr>
          <th>Instructor Name</th>
          <th>Slots</th>
          <th>Book</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((user) => (
          <tr key={user.instructor}>
            <td>{user.instructor}</td>
            <td>{user.timeSlot}</td>
            <td>
              <Button style={{ background: "blue" }}>Add</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Bookings;
