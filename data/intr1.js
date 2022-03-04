(function(){
	var loadHandler = window['i_{1AF55BD7-E26A-416D-8C3B-206681B31B4E}'];
	var interactionJson = "eyJkIjp7ImkiOiJpbnRlcmFjdGl2aXR5X3J2NncyOWkxM244bCIsIkMiOnsiaXMiOlt7ImkiOiJoMmozZnlxaDNtcmciLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDowZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+TGF5ZXI8L3NwYW4+PC9wPiIsImEiOiI8cD48Yj5MYXllcjwvYj48L3A+IiwiciI6W10sImQiOlsiTGF5ZXIiXX0sImNvIjoxNjE3MTYxMywidHAiOiJncm91cCIsInJkIjowfSx7ImkiOiJ2bTF0OGE1M2JpaWIiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDowZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+U3RhcnQgaGVyZTwvc3Bhbj48L3A+IiwiYSI6IjxwPjxiPlN0YXJ0IGhlcmU8L2I+PC9wPiIsInIiOltdLCJkIjpbIlN0YXJ0IGhlcmUiXX0sImMiOnsiaCI6IjxwIHN0eWxlPVwibGluZS1oZWlnaHQ6MS41ZW07cGFkZGluZy10b3A6MC40ZW07cGFkZGluZy1ib3R0b206MC44ZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MV8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MV8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5FbmdhZ2VzIGxlYXJuZXJzIGZyb20gZGlmZmVyZW50IGVkdWNhdGlvbmFsLCBjdWx0dXJhbCBhbmQgbGFuZ3VhZ2UgYmFja2dyb3VuZHMsIHRvIHByb21vdGUgYWN0aXZlIGxlYXJuaW5nIGFuZCByZWZsZWN0aW9uPC9zcGFuPjwvcD4iLCJhIjoiPHA+PGI+RW5nYWdlcyBsZWFybmVycyBmcm9tIGRpZmZlcmVudCBlZHVjYXRpb25hbCwgY3VsdHVyYWwgYW5kIGxhbmd1YWdlIGJhY2tncm91bmRzLCB0byBwcm9tb3RlIGFjdGl2ZSBsZWFybmluZyBhbmQgcmVmbGVjdGlvbjwvYj48L3A+IiwiciI6W10sImQiOlsiRW5nYWdlcyBsZWFybmVycyBmcm9tIGRpZmZlcmVudCBlZHVjYXRpb25hbCwgY3VsdHVyYWwgYW5kIGxhbmd1YWdlIGJhY2tncm91bmRzLCB0byBwcm9tb3RlIGFjdGl2ZSBsZWFybmluZyBhbmQgcmVmbGVjdGlvbiJdfSwidHAiOiJpdGVtIn0seyJpIjoic3l3bjV5c3oxanRzIiwidCI6eyJoIjoiPHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjE1ZW07cGFkZGluZy10b3A6MGVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MjRweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkxheWVyPC9zcGFuPjwvcD4iLCJhIjoiPHA+PGI+TGF5ZXI8L2I+PC9wPiIsInIiOltdLCJkIjpbIkxheWVyIl19LCJjbyI6MTEwNTcyMjIsInRwIjoiZ3JvdXAiLCJyZCI6MH0seyJpIjoieXQxeDR4dDA5dWFmIiwidCI6eyJoIjoiPHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjE1ZW07cGFkZGluZy10b3A6MWVtO3BhZGRpbmctYm90dG9tOjAuNWVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtcIj7igIs8L3NwYW4+PC9wPiIsImEiOiI8cD48L3A+IiwiciI6W10sImQiOltdfSwiYyI6eyJoIjoiPGgxIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yZW07cGFkZGluZy10b3A6MC4zZW07cGFkZGluZy1ib3R0b206MC4yZW07Zm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5Gb3VuZGF0aW9uYWwgLSBDYXBhYmlsaXRpZXMgKFdoYXQgeW91IGNhbiBkbyk8L3NwYW4+PC9oMT48cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuNWVtO3BhZGRpbmctdG9wOjAuNGVtO3BhZGRpbmctYm90dG9tOjAuOGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+QWRvcHRzIGEgc3R1ZGVudC1jZW50cmVkIGFwcHJvYWNoIGFuZCBwcm9tb3RlcyBhY3RpdmUgbGVhcm5pbmcuPC9zcGFuPjwvcD4iLCJhIjoiPGgxPjxiPkZvdW5kYXRpb25hbCAtIENhcGFiaWxpdGllcyAoV2hhdCB5b3UgY2FuIGRvKTwvYj48L2gxPjxwPkFkb3B0cyBhIHN0dWRlbnQtY2VudHJlZCBhcHByb2FjaCBhbmQgcHJvbW90ZXMgYWN0aXZlIGxlYXJuaW5nLjwvcD4iLCJyIjpbXSwiZCI6WyJGb3VuZGF0aW9uYWwgLSBDYXBhYmlsaXRpZXMgKFdoYXQgeW91IGNhbiBkbylcbkFkb3B0cyBhIHN0dWRlbnQtY2VudHJlZCBhcHByb2FjaCBhbmQgcHJvbW90ZXMgYWN0aXZlIGxlYXJuaW5nLiJdfSwidHAiOiJpdGVtIn0seyJpIjoiemV4OHY3aW9jNnpjIiwidCI6eyJoIjoiPHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjE1ZW07cGFkZGluZy10b3A6MWVtO3BhZGRpbmctYm90dG9tOjAuNWVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtcIj7igIs8L3NwYW4+PC9wPiIsImEiOiI8cD48L3A+IiwiciI6W10sImQiOltdfSwiYyI6eyJoIjoiPGgxIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yZW07cGFkZGluZy10b3A6MC4zZW07cGFkZGluZy1ib3R0b206MC4yZW07Zm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5Gb3VuZGF0aW9uYWwgLSBFdmlkZW5jZSAoSG93IHlvdSBkb2N1bWVudCB5b3VyIGFjaGlldmVtZW50cyk8L3NwYW4+PC9oMT48dWw+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjRlbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5TdHVkZW50IGZlZWRiYWNrIChteUV4cGVyaWVuY2UgYW5kL29yIHRlYWNoZXIgc3VydmV5cyBhbmQgb3RoZXIgc291cmNlcyk8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV2aWRlbmNlIG9mIHN0dWRlbnQgYWNoaWV2ZW1lbnQ8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV4ZW1wbGFyeSBzdHVkZW50IHdvcms8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjAuOGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+RmVlZGJhY2sgZnJvbSBmb3JtYXRpdmUgYW5kL29yIHN1bW1hdGl2ZSBwZWVyIHJldmlld3Mgb2YgdGVhY2hpbmc8L3NwYW4+PC9saT48L3VsPiIsImEiOiI8aDE+PGI+Rm91bmRhdGlvbmFsIC0gRXZpZGVuY2UgKEhvdyB5b3UgZG9jdW1lbnQgeW91ciBhY2hpZXZlbWVudHMpPC9iPjwvaDE+PHVsPjxsaT5TdHVkZW50IGZlZWRiYWNrIChteUV4cGVyaWVuY2UgYW5kL29yIHRlYWNoZXIgc3VydmV5cyBhbmQgb3RoZXIgc291cmNlcyk8L2xpPjxsaT5FdmlkZW5jZSBvZiBzdHVkZW50IGFjaGlldmVtZW50PC9saT48bGk+RXhlbXBsYXJ5IHN0dWRlbnQgd29yazwvbGk+PGxpPkZlZWRiYWNrIGZyb20gZm9ybWF0aXZlIGFuZC9vciBzdW1tYXRpdmUgcGVlciByZXZpZXdzIG9mIHRlYWNoaW5nPC9saT48L3VsPiIsInIiOltdLCJkIjpbIkZvdW5kYXRpb25hbCAtIEV2aWRlbmNlIChIb3cgeW91IGRvY3VtZW50IHlvdXIgYWNoaWV2ZW1lbnRzKVxuU3R1ZGVudCBmZWVkYmFjayAobXlFeHBlcmllbmNlIGFuZC9vciB0ZWFjaGVyIHN1cnZleXMgYW5kIG90aGVyIHNvdXJjZXMpXG5FdmlkZW5jZSBvZiBzdHVkZW50IGFjaGlldmVtZW50XG5FeGVtcGxhcnkgc3R1ZGVudCB3b3JrXG5GZWVkYmFjayBmcm9tIGZvcm1hdGl2ZSBhbmQvb3Igc3VtbWF0aXZlIHBlZXIgcmV2aWV3cyBvZiB0ZWFjaGluZyJdfSwidHAiOiJpdGVtIn0seyJpIjoiZGxsNzliYXd4YmJ5IiwidCI6eyJoIjoiPHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjE1ZW07cGFkZGluZy10b3A6MWVtO3BhZGRpbmctYm90dG9tOjAuNWVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtcIj7igIs8L3NwYW4+PC9wPiIsImEiOiI8cD48L3A+IiwiciI6W10sImQiOltdfSwiYyI6eyJoIjoiPGgxIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yZW07cGFkZGluZy10b3A6MC4zZW07cGFkZGluZy1ib3R0b206MC4yZW07Zm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5Gb3VuZGF0aW9uYWwgLSBQRCDigIsgKFdoZXJlIHlvdSBjYW4gbGVhcm4pPC9zcGFuPjwvaDE+PHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjVlbTtwYWRkaW5nLXRvcDowLjRlbTtwYWRkaW5nLWJvdHRvbTowLjhlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPlVSTDpUZWFjaGluZyBFc3NlbnRpYWxzOiBHZXR0aW5nIFN0YXJ0ZWQgd2l0aCBUZWFjaGluZyAoMS41LWhvdXIgd29ya3Nob3ApPC9zcGFuPjwvcD4iLCJhIjoiPGgxPjxiPkZvdW5kYXRpb25hbCAtIFBEIOKAiyAoV2hlcmUgeW91IGNhbiBsZWFybik8L2I+PC9oMT48cD5VUkw6VGVhY2hpbmcgRXNzZW50aWFsczogR2V0dGluZyBTdGFydGVkIHdpdGggVGVhY2hpbmcgKDEuNS1ob3VyIHdvcmtzaG9wKTwvcD4iLCJyIjpbXSwiZCI6WyJGb3VuZGF0aW9uYWwgLSBQRCAgKFdoZXJlIHlvdSBjYW4gbGVhcm4pXG5VUkw6VGVhY2hpbmcgRXNzZW50aWFsczogR2V0dGluZyBTdGFydGVkIHdpdGggVGVhY2hpbmcgKDEuNS1ob3VyIHdvcmtzaG9wKSJdfSwidHAiOiJpdGVtIn0seyJpIjoiYWQ0bTVjbnZ1eTZlIiwidCI6eyJoIjoiPHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjE1ZW07cGFkZGluZy10b3A6MGVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MjRweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkxheWVyPC9zcGFuPjwvcD4iLCJhIjoiPHA+PGI+TGF5ZXI8L2I+PC9wPiIsInIiOltdLCJkIjpbIkxheWVyIl19LCJjbyI6NTQwOTc1OSwidHAiOiJncm91cCIsInJkIjowfSx7ImkiOiJ2d2tsNHBnZXMwaGQiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDoxZW07cGFkZGluZy1ib3R0b206MC41ZW07Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO1wiPuKAizwvc3Bhbj48L3A+IiwiYSI6IjxwPjwvcD4iLCJyIjpbXSwiZCI6W119LCJjIjp7ImgiOiI8aDEgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjJlbTtwYWRkaW5nLXRvcDowLjNlbTtwYWRkaW5nLWJvdHRvbTowLjJlbTtmb250LXNpemU6MjBweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjBweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPlByb2ZpY2llbnQgLSBDYXBhYmlsaXRpZXMgKFdoYXQgeW91IGNhbiBkbyk8L3NwYW4+PC9oMT48cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuNWVtO3BhZGRpbmctdG9wOjAuNGVtO3BhZGRpbmctYm90dG9tOjAuOGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+UnVucyBmbGV4aWJsZSBsZWFybmluZyBhY3Rpdml0aWVzIHRoYXQgcHJvbW90ZSByZWZsZWN0aW9uIGFuZCBhcmUgaW5jbHVzaXZlIGFuZCBhY2Nlc3NpYmxlIHRvIGFsbCBzdHVkZW50cy48L3NwYW4+PC9wPiIsImEiOiI8aDE+PGI+UHJvZmljaWVudCAtIENhcGFiaWxpdGllcyAoV2hhdCB5b3UgY2FuIGRvKTwvYj48L2gxPjxwPlJ1bnMgZmxleGlibGUgbGVhcm5pbmcgYWN0aXZpdGllcyB0aGF0IHByb21vdGUgcmVmbGVjdGlvbiBhbmQgYXJlIGluY2x1c2l2ZSBhbmQgYWNjZXNzaWJsZSB0byBhbGwgc3R1ZGVudHMuPC9wPiIsInIiOltdLCJkIjpbIlByb2ZpY2llbnQgLSBDYXBhYmlsaXRpZXMgKFdoYXQgeW91IGNhbiBkbylcblJ1bnMgZmxleGlibGUgbGVhcm5pbmcgYWN0aXZpdGllcyB0aGF0IHByb21vdGUgcmVmbGVjdGlvbiBhbmQgYXJlIGluY2x1c2l2ZSBhbmQgYWNjZXNzaWJsZSB0byBhbGwgc3R1ZGVudHMuIl19LCJ0cCI6Iml0ZW0ifSx7ImkiOiJ6ZWUwNXVwZTN3enkiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDoxZW07cGFkZGluZy1ib3R0b206MC41ZW07Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO1wiPuKAizwvc3Bhbj48L3A+IiwiYSI6IjxwPjwvcD4iLCJyIjpbXSwiZCI6W119LCJjIjp7ImgiOiI8aDEgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjJlbTtwYWRkaW5nLXRvcDowLjNlbTtwYWRkaW5nLWJvdHRvbTowLjJlbTtmb250LXNpemU6MjBweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjBweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPlByb2ZpY2llbnQgLSBFdmlkZW5jZSAoSG93IHlvdSBkb2N1bWVudCB5b3VyIGFjaGlldmVtZW50cyk8L3NwYW4+PC9oMT48dWw+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjRlbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5TdHVkZW50IGZlZWRiYWNrIChteUV4cGVyaWVuY2UgYW5kL29yIHRlYWNoZXIgc3VydmV5cyBhbmQgb3RoZXIgc291cmNlcyk8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV2aWRlbmNlIG9mIHN0dWRlbnQgYWNoaWV2ZW1lbnQ8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV4ZW1wbGFyeSBzdHVkZW50IHdvcms8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjAuOGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+RmVlZGJhY2sgZnJvbSBmb3JtYXRpdmUgYW5kL29yIHN1bW1hdGl2ZSBwZWVyIHJldmlld3Mgb2YgdGVhY2hpbmc8L3NwYW4+PC9saT48L3VsPiIsImEiOiI8aDE+PGI+UHJvZmljaWVudCAtIEV2aWRlbmNlIChIb3cgeW91IGRvY3VtZW50IHlvdXIgYWNoaWV2ZW1lbnRzKTwvYj48L2gxPjx1bD48bGk+U3R1ZGVudCBmZWVkYmFjayAobXlFeHBlcmllbmNlIGFuZC9vciB0ZWFjaGVyIHN1cnZleXMgYW5kIG90aGVyIHNvdXJjZXMpPC9saT48bGk+RXZpZGVuY2Ugb2Ygc3R1ZGVudCBhY2hpZXZlbWVudDwvbGk+PGxpPkV4ZW1wbGFyeSBzdHVkZW50IHdvcms8L2xpPjxsaT5GZWVkYmFjayBmcm9tIGZvcm1hdGl2ZSBhbmQvb3Igc3VtbWF0aXZlIHBlZXIgcmV2aWV3cyBvZiB0ZWFjaGluZzwvbGk+PC91bD4iLCJyIjpbXSwiZCI6WyJQcm9maWNpZW50IC0gRXZpZGVuY2UgKEhvdyB5b3UgZG9jdW1lbnQgeW91ciBhY2hpZXZlbWVudHMpXG5TdHVkZW50IGZlZWRiYWNrIChteUV4cGVyaWVuY2UgYW5kL29yIHRlYWNoZXIgc3VydmV5cyBhbmQgb3RoZXIgc291cmNlcylcbkV2aWRlbmNlIG9mIHN0dWRlbnQgYWNoaWV2ZW1lbnRcbkV4ZW1wbGFyeSBzdHVkZW50IHdvcmtcbkZlZWRiYWNrIGZyb20gZm9ybWF0aXZlIGFuZC9vciBzdW1tYXRpdmUgcGVlciByZXZpZXdzIG9mIHRlYWNoaW5nIl19LCJ0cCI6Iml0ZW0ifSx7ImkiOiJ3ZXRlMmRpaHZiMmgiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDowZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtcIj7igIs8L3NwYW4+PC9wPiIsImEiOiI8cD48L3A+IiwiciI6W10sImQiOltdfSwiYyI6eyJoIjoiPGgxIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yZW07cGFkZGluZy10b3A6MC4zZW07cGFkZGluZy1ib3R0b206MC4yZW07Zm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5Qcm9maWNpZW50IC0gUEQg4oCLIChXaGVyZSB5b3UgY2FuIGxlYXJuKTwvc3Bhbj48L2gxPjx1bD48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNGVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPlRlYWNoaW5nIEVzc2VudGlhbHM6IENvdXJzZSBEZXNpZ24gKDItaG91ciB3b3Jrc2hvcCk8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPlRlYWNoaW5nIHRvZGF5JiMzOTtzIGRpdmVyc2UgbGVhcm5lcnMgKDItaG91ciBzZWxmLXBhY2VkIG1vZHVsZSk8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkZVTFQgKDQwLWhvdXIgcHJvZ3JhbSk8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjAuOGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+VGVhY2hpbmcgRXNzZW50aWFsczogSW5jbHVzaXZlIFRlYWNoaW5nIFByYWN0aWNlcyAoMS1ob3VyIHdvcmtzaG9wKTwvc3Bhbj48L2xpPjwvdWw+IiwiYSI6IjxoMT48Yj5Qcm9maWNpZW50IC0gUEQg4oCLIChXaGVyZSB5b3UgY2FuIGxlYXJuKTwvYj48L2gxPjx1bD48bGk+VGVhY2hpbmcgRXNzZW50aWFsczogQ291cnNlIERlc2lnbiAoMi1ob3VyIHdvcmtzaG9wKTwvbGk+PGxpPlRlYWNoaW5nIHRvZGF5JiMzOTtzIGRpdmVyc2UgbGVhcm5lcnMgKDItaG91ciBzZWxmLXBhY2VkIG1vZHVsZSk8L2xpPjxsaT5GVUxUICg0MC1ob3VyIHByb2dyYW0pPC9saT48bGk+VGVhY2hpbmcgRXNzZW50aWFsczogSW5jbHVzaXZlIFRlYWNoaW5nIFByYWN0aWNlcyAoMS1ob3VyIHdvcmtzaG9wKTwvbGk+PC91bD4iLCJyIjpbXSwiZCI6WyJQcm9maWNpZW50IC0gUEQgIChXaGVyZSB5b3UgY2FuIGxlYXJuKVxuVGVhY2hpbmcgRXNzZW50aWFsczogQ291cnNlIERlc2lnbiAoMi1ob3VyIHdvcmtzaG9wKVxuVGVhY2hpbmcgdG9kYXkncyBkaXZlcnNlIGxlYXJuZXJzICgyLWhvdXIgc2VsZi1wYWNlZCBtb2R1bGUpXG5GVUxUICg0MC1ob3VyIHByb2dyYW0pXG5UZWFjaGluZyBFc3NlbnRpYWxzOiBJbmNsdXNpdmUgVGVhY2hpbmcgUHJhY3RpY2VzICgxLWhvdXIgd29ya3Nob3ApIl19LCJ0cCI6Iml0ZW0ifSx7ImkiOiJpMHR3MzBraTRzZWwiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDowZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+TGF5ZXI8L3NwYW4+PC9wPiIsImEiOiI8cD48Yj5MYXllcjwvYj48L3A+IiwiciI6W10sImQiOlsiTGF5ZXIiXX0sImNvIjoxNTg5ODk3OCwidHAiOiJncm91cCIsInJkIjowfSx7ImkiOiJ4MTVoZXB1dzIyYWQiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDoxZW07cGFkZGluZy1ib3R0b206MC41ZW07Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5DYXBhYmlsaXRpZXMgKFdoYXQgeW91IGNhbiBkbyk8L3NwYW4+PC9wPiIsImEiOiI8cD48Yj5DYXBhYmlsaXRpZXMgKFdoYXQgeW91IGNhbiBkbyk8L2I+PC9wPiIsInIiOltdLCJkIjpbIkNhcGFiaWxpdGllcyAoV2hhdCB5b3UgY2FuIGRvKSJdfSwiYyI6eyJoIjoiPGgxIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yZW07cGFkZGluZy10b3A6MC4zZW07cGFkZGluZy1ib3R0b206MC4yZW07Zm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5FeHBlcnQ6PC9zcGFuPjwvaDE+PHVsPjxsaSBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMjc1ZW07cGFkZGluZy10b3A6MC40ZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDBfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+QWRvcHRzIGlubm92YXRpdmUgYXBwcm9hY2hlcyB0byBlbmdhZ2Ugc3R1ZGVudHMgZnJvbSBkaWZmZXJlbnQgYmFja2dyb3VuZHMuIDwvc3Bhbj48L2xpPjxsaSBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMjc1ZW07cGFkZGluZy10b3A6MC41MjQ5OTk5OTk5OTk5OTk5ZW07cGFkZGluZy1ib3R0b206MC44ZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5JbXByb3ZlcyBzdHVkZW50IGFjaGlldmVtZW50IGF0IFVuaXZlcnNpdHkgbGV2ZWwuPC9zcGFuPjwvbGk+PC91bD4iLCJhIjoiPGgxPjxiPkV4cGVydDo8L2I+PC9oMT48dWw+PGxpPkFkb3B0cyBpbm5vdmF0aXZlIGFwcHJvYWNoZXMgdG8gZW5nYWdlIHN0dWRlbnRzIGZyb20gZGlmZmVyZW50IGJhY2tncm91bmRzLiA8L2xpPjxsaT5JbXByb3ZlcyBzdHVkZW50IGFjaGlldmVtZW50IGF0IFVuaXZlcnNpdHkgbGV2ZWwuPC9saT48L3VsPiIsInIiOltdLCJkIjpbIkV4cGVydDpcbkFkb3B0cyBpbm5vdmF0aXZlIGFwcHJvYWNoZXMgdG8gZW5nYWdlIHN0dWRlbnRzIGZyb20gZGlmZmVyZW50IGJhY2tncm91bmRzLiBcbkltcHJvdmVzIHN0dWRlbnQgYWNoaWV2ZW1lbnQgYXQgVW5pdmVyc2l0eSBsZXZlbC4iXX0sInRwIjoiaXRlbSJ9LHsiaSI6Imt3MHBpM3U3OXVxYyIsInQiOnsiaCI6IjxwIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4xNWVtO3BhZGRpbmctdG9wOjFlbTtwYWRkaW5nLWJvdHRvbTowLjVlbTtmb250LXNpemU6MjRweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV2aWRlbmNlIChIb3cgeW91IGRvY3VtZW50IHlvdXIgYWNoaWV2ZW1lbnRzKTwvc3Bhbj48L3A+IiwiYSI6IjxwPjxiPkV2aWRlbmNlIChIb3cgeW91IGRvY3VtZW50IHlvdXIgYWNoaWV2ZW1lbnRzKTwvYj48L3A+IiwiciI6W10sImQiOlsiRXZpZGVuY2UgKEhvdyB5b3UgZG9jdW1lbnQgeW91ciBhY2hpZXZlbWVudHMpIl19LCJjIjp7ImgiOiI8aDEgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjJlbTtwYWRkaW5nLXRvcDowLjNlbTtwYWRkaW5nLWJvdHRvbTowLjJlbTtmb250LXNpemU6MjBweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjBweDtmb250LWZhbWlseTpmbnQ0XzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV4cGVydDo8L3NwYW4+PC9oMT48dWw+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjRlbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5TdXN0YWluZWQgc3R1ZGVudCBmZWVkYmFjayAobXlFeHBlcmllbmNlIGFuZC9vciB0ZWFjaGVyIHN1cnZleXMgYW5kIG90aGVyIHNvdXJjZXMpPC9zcGFuPjwvbGk+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjUyNDk5OTk5OTk5OTk5OTllbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5FdmlkZW5jZSBvZiBzdHVkZW50IGFjaGlldmVtZW50PC9zcGFuPjwvbGk+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjUyNDk5OTk5OTk5OTk5OTllbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5FeGVtcGxhcnkgc3R1ZGVudCB3b3JrPC9zcGFuPjwvbGk+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjUyNDk5OTk5OTk5OTk5OTllbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5JbXByb3ZlbWVudHMgaW4gc3R1ZGVudCByZXN1bHRzLCBzdHVkZW50IHJldGVudGlvbiwgb3IgY291cnNlIGNvbXBsZXRpb24gcmF0ZXM8L3NwYW4+PC9saT48bGkgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjI3NWVtO3BhZGRpbmctdG9wOjAuNTI0OTk5OTk5OTk5OTk5OWVtO3BhZGRpbmctYm90dG9tOjBlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkZlZWRiYWNrIGZyb20gZm9ybWF0aXZlIGFuZC9vciBzdW1tYXRpdmUgcGVlciByZXZpZXdzIG9mIHRlYWNoaW5nPC9zcGFuPjwvbGk+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjUyNDk5OTk5OTk5OTk5OTllbTtwYWRkaW5nLWJvdHRvbTowLjhlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPkV2aWRlbmNlIG9mIGxlYWRlcnNoaXAgb2Ygc3VjY2Vzc2Z1bCBpbml0aWF0aXZlcyB0byBpbXByb3ZlIHN0dWRlbnQgYWNoaWV2ZW1lbnQgYXQgVW5pdmVyc2l0eSBsZXZlbDwvc3Bhbj48L2xpPjwvdWw+IiwiYSI6IjxoMT48Yj5FeHBlcnQ6PC9iPjwvaDE+PHVsPjxsaT5TdXN0YWluZWQgc3R1ZGVudCBmZWVkYmFjayAobXlFeHBlcmllbmNlIGFuZC9vciB0ZWFjaGVyIHN1cnZleXMgYW5kIG90aGVyIHNvdXJjZXMpPC9saT48bGk+RXZpZGVuY2Ugb2Ygc3R1ZGVudCBhY2hpZXZlbWVudDwvbGk+PGxpPkV4ZW1wbGFyeSBzdHVkZW50IHdvcms8L2xpPjxsaT5JbXByb3ZlbWVudHMgaW4gc3R1ZGVudCByZXN1bHRzLCBzdHVkZW50IHJldGVudGlvbiwgb3IgY291cnNlIGNvbXBsZXRpb24gcmF0ZXM8L2xpPjxsaT5GZWVkYmFjayBmcm9tIGZvcm1hdGl2ZSBhbmQvb3Igc3VtbWF0aXZlIHBlZXIgcmV2aWV3cyBvZiB0ZWFjaGluZzwvbGk+PGxpPkV2aWRlbmNlIG9mIGxlYWRlcnNoaXAgb2Ygc3VjY2Vzc2Z1bCBpbml0aWF0aXZlcyB0byBpbXByb3ZlIHN0dWRlbnQgYWNoaWV2ZW1lbnQgYXQgVW5pdmVyc2l0eSBsZXZlbDwvbGk+PC91bD4iLCJyIjpbXSwiZCI6WyJFeHBlcnQ6XG5TdXN0YWluZWQgc3R1ZGVudCBmZWVkYmFjayAobXlFeHBlcmllbmNlIGFuZC9vciB0ZWFjaGVyIHN1cnZleXMgYW5kIG90aGVyIHNvdXJjZXMpXG5FdmlkZW5jZSBvZiBzdHVkZW50IGFjaGlldmVtZW50XG5FeGVtcGxhcnkgc3R1ZGVudCB3b3JrXG5JbXByb3ZlbWVudHMgaW4gc3R1ZGVudCByZXN1bHRzLCBzdHVkZW50IHJldGVudGlvbiwgb3IgY291cnNlIGNvbXBsZXRpb24gcmF0ZXNcbkZlZWRiYWNrIGZyb20gZm9ybWF0aXZlIGFuZC9vciBzdW1tYXRpdmUgcGVlciByZXZpZXdzIG9mIHRlYWNoaW5nXG5FdmlkZW5jZSBvZiBsZWFkZXJzaGlwIG9mIHN1Y2Nlc3NmdWwgaW5pdGlhdGl2ZXMgdG8gaW1wcm92ZSBzdHVkZW50IGFjaGlldmVtZW50IGF0IFVuaXZlcnNpdHkgbGV2ZWwiXX0sInRwIjoiaXRlbSJ9LHsiaSI6ImViMXBscG9rN2l3MSIsInQiOnsiaCI6IjxwIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4xNWVtO3BhZGRpbmctdG9wOjBlbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5QRCAoV2hlcmUgeW91IGNhbiBsZWFybik8L3NwYW4+PC9wPiIsImEiOiI8cD48Yj5QRCAoV2hlcmUgeW91IGNhbiBsZWFybik8L2I+PC9wPiIsInIiOltdLCJkIjpbIlBEIChXaGVyZSB5b3UgY2FuIGxlYXJuKSJdfSwiYyI6eyJoIjoiPGgxIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yZW07cGFkZGluZy10b3A6MC4zZW07cGFkZGluZy1ib3R0b206MC4yZW07Zm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5FeHBlcnQ6PC9zcGFuPjwvaDE+PHVsPjxsaSBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMjc1ZW07cGFkZGluZy10b3A6MC40ZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDJfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmZudDJfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+SWRlbnRpZnkgb3IgY3JlYXRlIFBEIG9wcG9ydHVuaXR5IChhY2Nlc3NpYmlsaXR5LCBVREwpPC9zcGFuPjwvbGk+PGxpIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4yNzVlbTtwYWRkaW5nLXRvcDowLjUyNDk5OTk5OTk5OTk5OTllbTtwYWRkaW5nLWJvdHRvbTowLjhlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQyXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQyXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO1wiPklkZW50aWZ5IG9yIGNyZWF0ZSBQRCBvcHBvcnR1bml0eSAoZGl2ZXJzaXR5LCBpbmNsdXNpb24pPC9zcGFuPjwvbGk+PC91bD4iLCJhIjoiPGgxPjxiPkV4cGVydDo8L2I+PC9oMT48dWw+PGxpPjxpPklkZW50aWZ5IG9yIGNyZWF0ZSBQRCBvcHBvcnR1bml0eSAoYWNjZXNzaWJpbGl0eSwgVURMKTwvaT48L2xpPjxsaT48aT5JZGVudGlmeSBvciBjcmVhdGUgUEQgb3Bwb3J0dW5pdHkgKGRpdmVyc2l0eSwgaW5jbHVzaW9uKTwvaT48L2xpPjwvdWw+IiwiciI6W10sImQiOlsiRXhwZXJ0OlxuSWRlbnRpZnkgb3IgY3JlYXRlIFBEIG9wcG9ydHVuaXR5IChhY2Nlc3NpYmlsaXR5LCBVREwpXG5JZGVudGlmeSBvciBjcmVhdGUgUEQgb3Bwb3J0dW5pdHkgKGRpdmVyc2l0eSwgaW5jbHVzaW9uKSJdfSwidHAiOiJpdGVtIn1dLCJpIjp7ImkiOiIyNGM3dzNuazZlZnkiLCJ0Ijp7ImgiOiI8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OjEuMTVlbTtwYWRkaW5nLXRvcDowZW07cGFkZGluZy1ib3R0b206MGVtO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmZudDRfMTg0NzAsIEFyaWFsLCBTZXJpZiwgU2Fucy1TZXJpZjtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7XCI+SW50cm9kdWN0aW9uPC9zcGFuPjwvcD4iLCJhIjoiPHA+PGI+SW50cm9kdWN0aW9uPC9iPjwvcD4iLCJyIjpbXSwiZCI6WyJJbnRyb2R1Y3Rpb24iXX0sImMiOnsiaCI6IjxwIHN0eWxlPVwibGluZS1oZWlnaHQ6MS41ZW07cGFkZGluZy10b3A6MC40ZW07cGFkZGluZy1ib3R0b206MC44ZW07Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Zm50MF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO1wiPuKAizwvc3Bhbj48L3A+IiwiYSI6IjxwPjwvcD4iLCJyIjpbXSwiZCI6W119LCJ2IjpmYWxzZX0sInMiOnsiaSI6InAybGJia2d4MXMydCIsInQiOnsiaCI6IjxwIHN0eWxlPVwibGluZS1oZWlnaHQ6MS4xNWVtO3BhZGRpbmctdG9wOjBlbTtwYWRkaW5nLWJvdHRvbTowZW07Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6Zm50NF8xODQ3MCwgQXJpYWwsIFNlcmlmLCBTYW5zLVNlcmlmO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtcIj5TdW1tYXJ5PC9zcGFuPjwvcD4iLCJhIjoiPHA+PGI+U3VtbWFyeTwvYj48L3A+IiwiciI6W10sImQiOlsiU3VtbWFyeSJdfSwiYyI6eyJoIjoiPHAgc3R5bGU9XCJsaW5lLWhlaWdodDoxLjVlbTtwYWRkaW5nLXRvcDowLjRlbTtwYWRkaW5nLWJvdHRvbTowLjhlbTtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTRweDtmb250LWZhbWlseTpmbnQwXzE4NDcwLCBBcmlhbCwgU2VyaWYsIFNhbnMtU2VyaWY7XCI+4oCLPC9zcGFuPjwvcD4iLCJhIjoiPHA+PC9wPiIsInIiOltdLCJkIjpbXX0sInYiOmZhbHNlfX0sInMiOnsidCI6IkNpcmNsZSBEaWFncmFtIiwidGUiOmZhbHNlLCJuYmUiOnRydWUsImZ0dyI6dHJ1ZSwiaXciOjEyODAsImloIjo3MjAsImNzYyI6MSwibGFyIjp0cnVlLCJkYXQiOjMsInVwYiI6ZmFsc2UsIm1jZSI6dHJ1ZSwidmwiOjIsImdvIjoibm9ybWFsIn19LCJzIjp7ImYiOnsidCI6eyJ0ZiI6eyJmIjoiZm50NF8xODQ3MCIsInMiOjI0LCJiIjpmYWxzZSwiaSI6ZmFsc2V9LCJwZiI6eyJ0IjoicCIsImxoIjoxLjE1LCJUIjoxLCJiIjowLjV9fSwibnQiOnsidGYiOnsiZiI6ImZudDNfMTg0NzAiLCJzIjoyNCwiYiI6ZmFsc2UsImkiOmZhbHNlfSwicGYiOnsidCI6InAiLCJsaCI6MS4xNSwiVCI6MSwiYiI6MC41fX0sImJ0Ijp7InRmIjp7ImYiOiJmbnQ0XzE4NDcwIiwicyI6MjQsImIiOmZhbHNlLCJpIjpmYWxzZX0sInBmIjp7InQiOiJwIiwibGgiOjEuMTUsIlQiOjEsImIiOjAuNX19fSwicCI6eyJhY2Nlc3NpYmlsaXR5SGlkZGVuTGluayI6IkdvIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGRlc2NyaXB0aW9uIiwiYWNjZXNzaWJpbGl0eVNraW5DcmVhdGVkV2l0aCI6IkNyZWF0ZWQgd2l0aCBpU3ByaW5nIGV2YWx1YXRpb24gdmVyc2lvbiIsImFjY2Vzc2libGVBcmlhTGFiZWxCb3R0b21QYW5lbCI6IkJvdHRvbSBCYXIiLCJhY2Nlc3NpYmxlQXJpYUxhYmVsSXRlbURlc2NyaXB0aW9uIjoiRWxlbWVudCBkZXNjcmlwdGlvbiIsImFjY2Vzc2libGVBcmlhTGFiZWxOYXZpZ2F0aW9uQnV0dG9ucyI6Ik5hdmlnYXRpb24gYnV0dG9ucyIsImFjY2Vzc2libGVBcmlhTGFiZWxTZXR0aW5ncyI6IkFjY2Vzc2liaWxpdHkgU2V0dGluZ3MiLCJiYWNrVG9BcHBCdXR0b25MYWJlbCI6IkJhY2siLCJjb250ZW50TGlzdCI6IkNvbnRlbnQgTGlzdCIsImVtcHR5U2VhcmNoUmVzdWx0IjoiTm8gbWF0Y2hlcyBmb3VuZC4iLCJlbmFibGVBY2Nlc3NpYmlsaXR5TW9kZSI6IlR1cm4gb24gYWNjZXNzaWJpbGl0eSBtb2RlIiwiZW5hYmxlTm9ybWFsTW9kZSI6IlR1cm4gb2ZmIGFjY2Vzc2liaWxpdHkgbW9kZSIsIm5leHRCdXR0b24iOiJORVhUIiwicHJldkJ1dHRvbiI6IlBSRVYiLCJzZWFyY2giOiJTZWFyY2gifSwiYyI6eyJpIjoiY2docm10Z3p0NjNkIiwibiI6IkN1c3RvbSBwcmVzZXQiLCJzIjp7ImkiOnsiYmciOjE2MjUwODcxLCJiIjoxNDczNzYzMiwidGl0YyI6MTY3NzcyMTUsInRpdGIiOjU3MjM5OTEsImNpIjp0cnVlLCJ0YiI6MTY3NzcyMTUsInR0YyI6NDczNzA5NiwidHRiIjoxMTMxNjM5Niwidml0IjoxNjc3NzIxNX0sInQiOnsidGkiOjQ3MzcwOTYsImgiOjQ3MzcwOTYsInMiOjQ3MzcwOTYsInQiOjQ3MzcwOTYsIkgiOjU0MDk3NTl9LCJkIjp7ImJnIjoxNjc3NzIxNSwiYiI6MTQ3Mzc2MzJ9LCJhcCI6eyJwYiI6MTU5ODc2OTksImMiOjQ3MzcwOTYsInBsYiI6NzM2ODgxNn0sInAiOnsicGIiOjEzNTU0MTMxLCJwbGIiOjE2Nzc3MjE1LCJiYiI6NTQwOTc1OSwiaGJiIjo0OTQ3NDAxLCJidGMiOjE2Nzc3MjE1LCJoYnRjIjoxNjc3NzIxNSwibWJhdCI6NTQwOTc1OX19fSwibSI6eyJpIjoiOHd1c2JhdDAwN2lpIiwibiI6IlZpc3VhbHMuQ29tbW9uLkVkaXRvci5Db2xvclNjaGVtZS5OYW1lLkxpZ2h0Qmx1ZSIsInMiOnsiaSI6eyJiZyI6MTY3NzcyMTUsImIiOjE0NzM3NjMyLCJ0aXRjIjoxNjc3NzIxNSwidGl0YiI6NTcyMzk5MSwiY2kiOnRydWUsInRiIjoxNjc3NzIxNSwidHRjIjo0NzM3MDk2LCJ0dGIiOjExMzE2Mzk2LCJ2aXQiOjE2Nzc3MjE1fSwidCI6eyJ0aSI6NDczNzA5NiwiaCI6NDczNzA5NiwicyI6NDczNzA5NiwidCI6NDczNzA5NiwiSCI6MjM4fSwiZCI6eyJiZyI6MTY3NzcyMTUsImIiOjE0NzM3NjMyfSwiYXAiOnsicGIiOjE1OTg3Njk5LCJjIjo0NzM3MDk2LCJwbGIiOjczNjg4MTZ9LCJwIjp7InBiIjoxMzU1NDEzMSwicGxiIjoxNjc3NzIxNSwiYmIiOjU0MDk3NTksImhiYiI6Mzg5ODMyNCwiYnRjIjoxNjc3NzIxNSwiaGJ0YyI6MTY3NzcyMTUsIm1iYXQiOjI4MzMyMjJ9fX19LCJwcyI6IntcbiAgICBcImNcIiA6IHtcbiAgICAgICAgXCJQXCIgOiB7XG4gICAgICAgICAgICBcImVcIiA6IHRydWUsXG4gICAgICAgICAgICBcImxcIiA6IHRydWUsXG4gICAgICAgICAgICBcIm1cIiA6IFwic2xpZGVUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJ2XCIgOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibFwiIDogdHJ1ZSxcbiAgICAgICAgXCJuXCIgOiBcImJ5U2xpZGVzXCIsXG4gICAgICAgIFwib1wiIDogZmFsc2UsXG4gICAgICAgIFwicFwiIDogdHJ1ZSxcbiAgICAgICAgXCJyXCIgOiB0cnVlLFxuICAgICAgICBcInNcIiA6IHRydWUsXG4gICAgICAgIFwidlwiIDogZmFsc2UsXG4gICAgICAgIFwid1wiIDogdHJ1ZSxcbiAgICAgICAgXCJ4XCIgOiBmYWxzZSxcbiAgICAgICAgXCJ6XCIgOiB0cnVlXG4gICAgfSxcbiAgICBcImxcIiA6IHtcbiAgICAgICAgXCJidXR0b24uY29udGVudC5ub3JtYWxcIiA6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBcImJ1dHRvbi5jb250ZW50Lm92ZXJcIiA6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBcImJ1dHRvbi5mYWNlLm5vcm1hbFwiIDogXCIjNTI4QkRGXCIsXG4gICAgICAgIFwiYnV0dG9uLmZhY2Uub3ZlclwiIDogXCIjNEI3REM5XCIsXG4gICAgICAgIFwiY29tcGFueUxvZ28uYmFja2dyb3VuZFwiIDogXCIjRjNGM0YzXCIsXG4gICAgICAgIFwiaHlwZXJsaW5rXCIgOiBcIiM1MjhCREZcIixcbiAgICAgICAgXCJsaXN0SXRlbS5mYWNlLm92ZXJcIiA6IFwiI0UxRTJFMlwiLFxuICAgICAgICBcImxpc3RJdGVtLmZhY2UucHJlc3NlZFwiIDogXCIjOURBMkE2XCIsXG4gICAgICAgIFwibGlzdEl0ZW0ubGFiZWwub3ZlclwiIDogXCIjNDc0ODRBXCIsXG4gICAgICAgIFwibGlzdEl0ZW0ubGFiZWwucHJlc3NlZFwiIDogXCIjRkZGRkZGXCIsXG4gICAgICAgIFwibGlzdEl0ZW0ubGFiZWwudmlzaXRlZFwiIDogXCIjNzI3Mzc0XCIsXG4gICAgICAgIFwicGFnZS5iYWNrZ3JvdW5kXCIgOiBcIiNDRUQxRDNcIixcbiAgICAgICAgXCJwYW5lbC5iYWNrZ3JvdW5kXCIgOiBcIiNGRkZGRkZcIixcbiAgICAgICAgXCJwYW5lbC50ZXh0XCIgOiBcIiM0NzQ4NEFcIixcbiAgICAgICAgXCJwbGF5ZXIuYmFja2dyb3VuZFwiIDogXCIjRkZGRkZGXCIsXG4gICAgICAgIFwicG9wdXAuYmFja2dyb3VuZFwiIDogXCIjRjNGM0YzXCIsXG4gICAgICAgIFwicHJvZ3Jlc3MuYmFja2dyb3VuZFwiIDogXCIjRjdGN0Y3XCIsXG4gICAgICAgIFwicHJvZ3Jlc3MubG9hZGluZ1wiIDogXCIjRDlEOUQ5XCIsXG4gICAgICAgIFwicHJvZ3Jlc3MucGxheWJhY2tcIiA6IFwiIzUyOEJERlwiLFxuICAgICAgICBcInNsaWRlLmJvcmRlclwiIDogXCIjRTBFMEUwXCIsXG4gICAgICAgIFwidGV4dFwiIDogXCIjNDc0ODRBXCJcbiAgICB9LFxuICAgIFwib1wiIDoge1xuICAgICAgICBcImhcIiA6IHRydWUsXG4gICAgICAgIFwibVwiIDogdHJ1ZSxcbiAgICAgICAgXCJuXCIgOiB0cnVlLFxuICAgICAgICBcInNcIiA6IHRydWUsXG4gICAgICAgIFwidFwiIDogdHJ1ZVxuICAgIH0sXG4gICAgXCJzXCIgOiB7XG4gICAgICAgIFwiTFwiIDogZmFsc2UsXG4gICAgICAgIFwibFwiIDogZmFsc2UsXG4gICAgICAgIFwiblwiIDogdHJ1ZSxcbiAgICAgICAgXCJvXCIgOiB0cnVlLFxuICAgICAgICBcInBcIiA6IGZhbHNlLFxuICAgICAgICBcInZcIiA6IGZhbHNlXG4gICAgfSxcbiAgICBcInRcIiA6IHtcbiAgICAgICAgXCJiXCIgOiBbIFwibWFya2VyVG9vbHNcIiwgXCJwcmVzZW50ZXJJbmZvXCIsIFwiYXR0YWNobWVudHNcIiBdLFxuICAgICAgICBcImJsXCIgOiBmYWxzZSxcbiAgICAgICAgXCJjXCIgOiBmYWxzZSxcbiAgICAgICAgXCJsXCIgOiBmYWxzZSxcbiAgICAgICAgXCJ2XCIgOiBmYWxzZVxuICAgIH1cbn0iLCJzYiI6IkQ6L0RvY3VtZW50cy9VTlNXL1VOU1cgQURBIFByb2plY3RzL1BEIEZyYW1ld29yay9BMV8xMjgwYnk3MjAgKFB1Ymxpc2hlZCkvZGF0YS9pbnRlcmFjdGlvbl9iZ18wLnBuZyIsImZwIjp0cnVlLCJycyI6eyJhIjp7fSwidiI6e30sImkiOnsiRDovRG9jdW1lbnRzL1VOU1cvVU5TVyBBREEgUHJvamVjdHMvUEQgRnJhbWV3b3JrL0ExXzEyODBieTcyMCAoUHVibGlzaGVkKS9kYXRhL2ludGVyYWN0aW9uX2JnXzAucG5nIjp7InMiOiJpbnRyMVxcaW1hZ2VzXFxpbnRlcmFjdGlvbl9iZ18wLnBuZyIsInYiOjEyODAsImgiOjcyMH19fSwiZnMiOnsiZm50MF8xODQ3MCI6WyJpbnRyMS9mb250cy9mbnQwLndvZmYiXSwiZm50MV8xODQ3MCI6WyJpbnRyMS9mb250cy9mbnQxLndvZmYiXSwiZm50Ml8xODQ3MCI6WyJpbnRyMS9mb250cy9mbnQyLndvZmYiXSwiZm50M18xODQ3MCI6WyJpbnRyMS9mb250cy9mbnQzLndvZmYiXSwiZm50NF8xODQ3MCI6WyJpbnRyMS9mb250cy9mbnQ0LndvZmYiXX0sIlMiOnsiZm50MF8xODQ3MCI6eyJmIjoiT3BlbiBTYW5zIiwiYiI6ZmFsc2UsImkiOmZhbHNlfSwiZm50MV8xODQ3MCI6eyJmIjoiT3BlbiBTYW5zIiwiYiI6dHJ1ZSwiaSI6ZmFsc2V9LCJmbnQyXzE4NDcwIjp7ImYiOiJPcGVuIFNhbnMiLCJiIjpmYWxzZSwiaSI6dHJ1ZX0sImZudDNfMTg0NzAiOnsiZiI6IlNlZ29lIFVJIiwiYiI6ZmFsc2UsImkiOmZhbHNlfSwiZm50NF8xODQ3MCI6eyJmIjoiU2Vnb2UgVUkiLCJiIjp0cnVlLCJpIjpmYWxzZX19LCJ2Ijp7fX0=";
	var skinSettings = {};
	loadHandler&&loadHandler(0, 'interactivity_rv6w29i13n8l', interactionJson, skinSettings);
	})();