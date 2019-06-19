When joining three or more tables, if every ON clause uses the same join key, a single MapReduce job will be used.


Hive also assumes that the last table in the query is the largest. It attempts to buffer the other tables and then stream the last table through, while performing joins on individual records. Therefore, you should structure your join queries so the largest table is last.

Fortunately, you don’t have to put the largest table last in the query. Hive also provides a “hint” mechanism to tell the query optimizer which table should be streamed:
SELECT /*+ STREAMTABLE(s) */ s.ymd, s.symbol, s.price_close, d.dividend FROM stocks s JOIN dividends d ON s.ymd = d.ymd AND s.symbol = d.symbol WHERE s.symbol = 'AAPL';
