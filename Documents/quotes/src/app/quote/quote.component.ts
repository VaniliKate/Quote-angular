import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteDelete(deleteQuote, index) {
    if (deleteQuote) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  most: number
  current: number
  count: number

  highestScore() {
    this.most = 0
    this.current = 0

    for (this.count = 0; this.count < this.quotes.length; this.count++) {
      this.current = this.quotes[this.count].upvotes;
      if (this.current > this.most) { this.most = this.current }
    }
    return this.most
  }


  public quotes: Quote[] = [
    new Quote('If he wants to,he will do it.', 'kate vanili', 'kate', new Date(2022, 4, 4)),
    new Quote('You cant negotiate genuine desire.', 'vanili kate', 'vanili', new Date(2022, 4, 4))
  ];

  addNewQuote(newQuote) {
    newQuote.date = new Date(newQuote.date);
    this.quotes.push(newQuote);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
