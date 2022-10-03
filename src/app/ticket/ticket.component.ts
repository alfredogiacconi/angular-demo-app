import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket/ticket';
import { TICKETS } from '../model/ticket/list-tickets';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket = TICKETS;

  selectedTicket?: Ticket;
  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
}

  constructor() { }

  ngOnInit(): void {
  }

}
