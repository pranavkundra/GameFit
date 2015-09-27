//
//  BattleViewController.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import Foundation
import UIKit

class BattleViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    var battleHistory = ["Player A zapped Player B", "Player B attacked player A with Y", "Player A attacked player B with Y"]
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return battleHistory.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("BattleHistoryCell", forIndexPath: indexPath)
        
        cell.textLabel?.text = battleHistory[indexPath.row]
        
        return cell
    }
}
