#!/bin/bash
num_changed_private=$( \
    cat changed.json | npx jq '[.[] | select(.private == true)] | length')
  num_changed_public=$(\
    cat changed.json | npx jq '[.[] | select(.private == false)] | length')
  echo "::set-output name=num_changed_private::$num_changed_private"
  echo "::set-output name=num_changed_public::$num_changed_public"