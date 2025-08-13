import { Component, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.css',
  shadow: true,
})
export class SearchBar {
  @State() text: string = '';

  @Event() textChange: EventEmitter<string>; // custom event to notify outer app

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.text = input.value;
    this.textChange.emit(this.text); // send text to parent
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search menu..."
        value={this.text}
        onInput={this.handleChange}
      />
    );
  }
}
