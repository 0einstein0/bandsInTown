import React, { Component } from "react";
import EventCard from "./EventCard";
import "../index.css";

class SearchBand extends Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
    this.getEventDetails = this.getEventDetails.bind(this);
    this.getBand = this.getBand.bind(this);
    this.getBandDetails = this.getBandDetails.bind(this);

    this.state = {
      band: "",

      bandObject: {},
      events: [],
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  async getEventDetails(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://rest.bandsintown.com/artists/${this.state.band}/events?app_id=abc`
      );
      const events = await res.json();

      this.setState({
        events: events,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getBandDetails(e) {
    e.preventDefault();
    try {
      const resul = await fetch(
        `https://rest.bandsintown.com/artists/${this.state.band}?app_id=abc`
      );
      const bandObject = await resul.json();

      this.setState({
        bandObject: bandObject,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = () => {
    this.setState({
      band: this.result.value,
    });
  };

  getBand() {
    if (Object.keys(this.state.bandObject).length !== 0) {
      return (
        <div class="card card-side bg-zinc-900 bg-opacity-90 shadow-xl px-4  mx-auto justify-items-center  ">
          <figure>
            <img
              className="mask mask-circle w-32"
              src={this.state.bandObject.thumb_url}
              alt="Artist"
            />
          </figure>
          <div class="card-body">
            <h2 class="text-secondary font-bold text-xl">
              {this.state.bandObject.name}
            </h2>
            <h2>
              <a href={this.state.bandObject.facebook_page_url}>
                {this.state.bandObject.facebook_page_url}
              </a>
            </h2>

            <div class="card-actions justify-end">
              <label
                for="my-modal-4"
                class="btn bg-primary text-white modal-button"
              >
                Go to Profile
              </label>
            </div>
          </div>
        </div>
      );
    }
  }

  getEvents() {
    if (this.state.bandObject.upcoming_event_count !== 0) {
      return (
        <div className="gap-7  max-w-fit mx-auto items-stretch justify-items-center  grid lg:grid-cols-2">
          {this.state.events.map((event) => EventCard(event))}
        </div>
      );
    } else {
      return <div>No Upcoming Events</div>;
    }
  }

  render() {
    return (
      <>
        <div className="input-group place-content-center scroll-smooth  ">
          <input
            type="text"
            name="search"
            className={
              "input placeholder:italic placeholder:text-slate-400  focus:outline-none foucs:bg-sky-600 rounded-3xl  w-9/12 input-primary "
            }
            placeholder={`Search by Band Name`}
            ref={(input) => (this.result = input)}
            onChange={this.handleChange}
          />
          <button onClick={this.getBandDetails} className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {this.getBand()}

        <section>
          <input type="checkbox" id="my-modal-4" class="modal-toggle" />
          <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box bg-opacity-95 w-11/12 max-w-5xl">
              <div className="grid grid-cols-2 place-items-center px-8 gap-y-5">
                {" "}
                <img
                  className="mask  mask-squircle  w-2/4"
                  src={this.state.bandObject.thumb_url}
                  alt="Artist"
                />
                <div className="grid grid-rows-3 max-w-fit gap-y-6">
                  <h1 class="text-5xl font-bold ">
                    {this.state.bandObject.name}
                  </h1>

                  <button class="btn text-white bg-sky-700 ">
                    <a
                      className=""
                      href={this.state.bandObject.facebook_page_url}
                    >
                      Facebook Page
                    </a>
                  </button>

                  <h2 class="font-medium ">
                    Upcoming Events:{" "}
                    <span className="text-pink-700">
                      {this.state.bandObject.upcoming_event_count}
                    </span>
                  </h2>
                </div>
                <button
                  className="btn text-white w-2/3 mb-8 bg-primary"
                  onClick={this.getEventDetails}
                >
                  See Upcoming Events
                </button>
              </div>

              {this.getEvents()}
            </label>
          </label>
        </section>
      </>
    );
  }
}

export default SearchBand;
