require('./test_helper');

var expect = require('chai').expect;
var nock = require('nock');

var Torrent = require('../lib/torrent.js');

describe('Torrent', function() {
  var torrent = new Torrent({
    'id': 9982925,
    'title': 'Ubuntu 14.04 64 bit',
    'url': 'http://thepiratebay.se/torrent/9982925/Ubuntu_14.04_64_bit',
    'category': 'Applications',
    'magnet': 'magnet:?xt=urn:btih:4d753474429d817b80ff9e0c441ca660ec5d2450&dn=Ubuntu+14.04+64+bit&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Ftracker-ccc.de%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337',
    'seeders': 108,
    'leechers': 14,
    'uploader': 'http://thepiratebay.se/user/fulanodetal1234/',
    'files': 1,
    'size': 1010827264,
    'date': '2014-04-17 18:08:20',
    'comments': 0,
    'hash': '4D753474429D817B80FF9E0C441CA660EC5D2450'
  });

  describe('.id', function() {
    it('should return the id', function() {
      expect(torrent.id).to.equal(9982925);
    });
  });

  describe('.title', function() {
    it('should return the title', function() {
      expect(torrent.title).to.equal('Ubuntu 14.04 64 bit');
    });
  });

  describe('.category', function() {
    it('should return the category', function() {
      expect(torrent.category).to.equal('Applications');
    });
  });

  describe('.url', function() {
    it('should return the url', function() {
      expect(torrent.url).to.equal('http://thepiratebay.se/torrent/9982925/Ubuntu_14.04_64_bit');
    });
  });

  describe('.magnet', function() {
    it('should return the magnet link', function() {
      expect(torrent.magnet).to.equal('magnet:?xt=urn:btih:4d753474429d817b80ff9e0c441ca660ec5d2450&dn=Ubuntu+14.04+64+bit&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Ftracker-ccc.de%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337');
    });
  });

  describe('.seeders', function() {
    it('should return the seeders', function() {
      expect(torrent.seeders).to.equal(108);
    });
  });

  describe('.leechers', function() {
    it('should return the leechers', function() {
      expect(torrent.leechers).to.equal(14);
    });
  });

  describe('.uploader', function() {
    it('should return the uploader', function() {
      expect(torrent.uploader).to.equal('http://thepiratebay.se/user/fulanodetal1234/');
    });
  });

  describe('.files', function() {
    it('should return the number of files', function() {
      expect(torrent.files).to.equal(1);
    });
  });

  describe('.bytes', function() {
    it('should return the size in bytes', function() {
      expect(torrent.bytes).to.equal(1010827264);
    });
  });

  describe('.size', function() {
    it('should return the size in megabytes', function() {
      expect(torrent.size).to.equal(964);
    });
  });

  describe('.date', function() {
    it('should return the date', function() {
      expect(torrent.date).to.equal('2014-04-17 18:08:20');
    });
  });

  describe('.comments', function() {
    it('should return the number of comments', function() {
      expect(torrent.comments).to.equal(0);
    });
  });

  describe('.hash', function() {
    it('should return the hash', function() {
      expect(torrent.hash).to.equal('4D753474429D817B80FF9E0C441CA660EC5D2450');
    });
  });

  describe('.find_by_id', function() {
    it('should return a Torrent object from the given id', function() {
      var scope = nock('http://thepiratebay.se')
        .get('/torrent/9982925')
        .replyWithFile(200, __dirname + '/fixtures/torrent.html');

      Torrent.find_by_id(9982925, function(torrent) {
        expect(torrent.id).to.equal(9982925);
        expect(torrent.title).to.equal('Ubuntu 14.04 64 bit');
      })
    });
  });

  describe('.parse_torrent_page', function() {
    it('should return a hash with torrent data', function() {
      fixture('torrent.html', function(html) {
        var results_hash = Torrent.parse_torrent_page(html)
        expect(results_hash.title).to.equal('Ubuntu 14.04 64 bit');
      });
    });
  });

});
