import React, { Component } from 'react';
import { Button, ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

class Buttons extends Component {
  handleSelect = (e) => {
    this.props.gridSize(e);
  }

  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <Button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </Button>
          <Button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </Button>
          <Button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </Button>
          <Button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </Button>
          <Button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </Button>
          <Button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </Button>
          <DropdownButton
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <MenuItem eventKey="1">20⨉10</MenuItem>
            <MenuItem eventKey="2">50⨉30</MenuItem>
            <MenuItem eventKey="3">70⨉50</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
