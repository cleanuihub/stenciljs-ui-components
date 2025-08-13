import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'search-button',
  styleUrl: 'search-button.css',
  shadow: true,
})
export class SearchButton {
  @Event() buttonClick: EventEmitter<void>;

  private handleClick = () => {
    this.buttonClick.emit(); // emit event to parent
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        🔍 Search
      </button>
    );
  }
}
