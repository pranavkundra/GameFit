//
//  ThirdViewController.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import UIKit

class ThirdViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

    @IBOutlet weak var statTableView: UITableView!
    var abilityList = ["➢ Wins", "➢ Losses", "➢ Best Score"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        statTableView.registerClass(UITableViewCell.self, forCellReuseIdentifier: "AbilityCell")
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("AbilityCell")
        
        cell?.textLabel?.text = abilityList[indexPath.row]
        
        return cell!
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return abilityList.count
    }
}