## Create a date object and change its timezone
	$timezone = new DateTimeZone($variables['field_twfq_event_date'][0]['timezone_db']);
  $timezoneATH = new DateTimeZone($variables['field_twfq_event_date'][0]['timezone']);
  $dateObj = (new DateTime($variables['field_twfq_event_date'][0]['value'], $timezone));
  $dateObj->setTimezone($timezoneATH);
  print $dateObj->format('d.m.Y');
  print $dateObj->format('Y/m/d H:i');

## Set the timestamp
  $dateObj->setTimestamp($node->created);