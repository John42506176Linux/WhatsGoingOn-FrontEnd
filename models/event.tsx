export class Event {
    event_date: string;
    event_link: string;
    event_title: string;
    event_location: string;
    is_local: boolean;
    is_tweet_event: boolean;
    is_in_state: boolean;
    is_event_date_available: boolean;
    url: string;
    source: string;
    retweet_count?: number;
    favorite_count?: number;
    reply_count?: number;
    twitter_id?: string;

    constructor({event_date, event_link, event_title, event_location, is_local, is_tweet_event, is_in_state, is_event_date_available, url, source, retweet_count, favorite_count, reply_count, twitter_id}:
        { event_date: string, event_link: string, event_title: string, event_location: string, is_local: boolean, is_tweet_event: boolean, is_in_state: boolean, is_event_date_available: boolean, url: string, source: string, retweet_count?: number, favorite_count?: number, reply_count?: number, twitter_id?: string }) {
        this.event_date = event_date;
        this.event_link = event_link;
        this.event_title = event_title;
        this.event_location = event_location;
        this.is_local = is_local;
        this.is_tweet_event = is_tweet_event;
        this.is_in_state = is_in_state;
        this.is_event_date_available = is_event_date_available;
        this.url = url;
        this.source = source;
        this.retweet_count = retweet_count;
        this.favorite_count = favorite_count;
        this.reply_count = reply_count;
        this.twitter_id = twitter_id;
    }

    static fromJSON(json: any): Event {
        return new Event({event_date: json['event_date'], event_link: json['event_link'], event_title: json['event_title'],
        event_location: json['event_location'], is_local: json['is_local'], is_tweet_event: json['is_tweet_event'],
        is_in_state: json['is_in_state'], is_event_date_available: json['is_event_date_available'],
        url: json['url'], source: json['source'], retweet_count: json['retweet_count'], favorite_count: json['favorite_count'], reply_count: json['reply_count'], twitter_id: json['twitter_id']});
    }

    toJSON() {
        return {
            event_date: this.event_date,
            event_link: this.event_link,
            event_title: this.event_title,
            event_location: this.event_location,
            is_local: this.is_local,
            is_tweet_event: this.is_tweet_event,
            is_in_state: this.is_in_state,
            is_event_date_available: this.is_event_date_available,
            url: this.url,
            source: this.source,
            retweet_count: this.retweet_count,
            favorite_count: this.favorite_count,
            reply_count: this.reply_count,
            twitter_id: this.twitter_id,
        };
    }
}
