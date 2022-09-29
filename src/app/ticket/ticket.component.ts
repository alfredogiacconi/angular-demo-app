import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TICKETS } from '../list-tickets';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // ticket: Ticket = {
  //   id: 1,
  //   first: 'Mark',
  //   last: 'Otto',
  //   email: 'mark.otto@email.com',
  //   message: '@mdo'
  // };

  ticket = TICKETS;

  selectedTicket?: Ticket;
  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
}

  constructor() { }

  ngOnInit(): void {
  }

}
