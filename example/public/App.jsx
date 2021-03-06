import React, { Component } from 'react';
import {form, loader } from 'subschema/index.jsx';
var Form = form;
import schema from './app.subschema.json';

//loader.addType('ContentWrapper', require('subschema-g10n/src/G10NContent.jsx'));
loader.addType('ContentWrapper', require('subschema-g10n/src/G10NEditor.jsx'));
/*
 <FormattedMessage
 message={this.getIntlMessage('photos')}
 name="Annie"
 numPhotos={1000}
 takenDate={Date.now()} />
 */

var value = {
    name: 'Bob',
    numPhotos: 3,
    takenDate: Date.now(),
    amount:100
};
export class App extends Component {
    static childContextTypes = {
        locales: React.PropTypes.any,
        messages: React.PropTypes.any,
        formats: React.PropTypes.any
    }

    getChildContext() {
        return schema.g10n;
    }

    render() {
        return (
            <div>
                <h1>Subschema Globalization Example app</h1>
                <Form schema={schema} value={value} loader={loader}/>
            </div>
        );
    }
}