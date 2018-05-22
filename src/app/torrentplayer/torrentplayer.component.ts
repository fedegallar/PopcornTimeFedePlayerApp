import { Component, OnInit } from '@angular/core';
import {WebTorrent} from 'webtorrent';
import { Torrent } from 'parse-torrent-file';
import { ActivatedRoute } from '@angular/router';
import {VTTConverter} from 'srt-webvtt';

  @Component({
    selector: 'torrentplayer',
    templateUrl: './torrentplayer.component.html',
    styleUrls: ['./torrentplayer.component.css']
  })
export class TorrentplayerComponent implements OnInit {
  magnet: string;
  constructor(private route: ActivatedRoute) { }
ngOnInit() {
  this.route.params.subscribe(params =>{this.magnet = params['magnet']});
  var WebTorrent = require('webtorrent-hybrid');
  var client = new WebTorrent()
  var torrentId = this.magnet;

  client.add(torrentId, function (torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
    var file = torrent.files.find(function (file) {
      return file.name.endsWith('.mp4')
    })
    console.log(file.name)
    // Display the file by adding it to the DOM.
    // Supports video, audio, image files, and more!
  file.renderTo('video#TorrPlayer')
  })
  }

}
