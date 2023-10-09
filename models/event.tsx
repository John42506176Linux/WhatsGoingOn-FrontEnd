export class Event {
    event_date?: string;
    event_link: string;
    event_name: string;
    event_location?: string;
    event_photo_link?: string;
    is_local: boolean;
    is_tweet_event: boolean;
    is_in_state: boolean;
    is_event_date_available: boolean;
    url: string;

    constructor(event_date: string, event_link: string, event_name: string, event_location: string, event_photo_link: string, is_local: boolean, is_tweet_event: boolean, is_in_state: boolean, is_event_date_available: boolean,url: string) {
        this.event_date = event_date;
        this.event_link = event_link;
        this.event_name = event_name;
        this.event_location = event_location;
        this.event_photo_link = event_photo_link;
        this.is_local = is_local;
        this.is_tweet_event = is_tweet_event;
        this.is_in_state = is_in_state;
        this.is_event_date_available = is_event_date_available;
        this.url = url;
    }

    static fromJSON(json: any): Event {
        return new Event(json['event_date'], json['event_link'], json['event_name'], json['event_location'], json['event_photo_link'], json['is_local'], json['is_tweet_event'], json['is_in_state'], json['is_event_date_available'], json['url']);
    }
}
