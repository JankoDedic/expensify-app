import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class DatePicker extends React.Component {
  state = {
    date: moment(),
    focused: false
  };
  onDateChange = (date) => {
    this.setState(() => ({ date }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };
  render() {
    return (
      <div>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
        />
      </div>
    )
  }
}

ReactDOM.render(<DatePicker />, document.getElementById('app'));